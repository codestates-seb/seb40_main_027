package com.yes27.config;

import com.yes27.auth.filter.JwtAuthenticationFilter;
import com.yes27.auth.handler.ErrorResponder.MemberAuthenticationEntryPoint;
import com.yes27.auth.handler.MemberAccessDeniedHandler;
import com.yes27.auth.handler.MemberAuthenticationFailureHandler;
import com.yes27.auth.handler.MemberAuthenticationSuccessHandler;
import com.yes27.auth.jwt.JwtTokenizer;
import com.yes27.auth.jwt.JwtVerificationFilter;
import com.yes27.auth.utils.CustomAuthorityUtils;
import com.yes27.member.repository.MemberRepository;
import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberRepository memberRepository;

    public SecurityConfig(JwtTokenizer jwtTokenizer,
        CustomAuthorityUtils authorityUtils, MemberRepository memberRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberRepository = memberRepository;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers().frameOptions().sameOrigin()
            .and()
            .csrf().disable()
            .cors(withDefaults())
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // 항상 세션 생성하지 않도록 구성
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // (1) 추가
            .accessDeniedHandler(new MemberAccessDeniedHandler())            // (2) 추가
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
            .authorizeHttpRequests(authorize -> authorize
                            .antMatchers(HttpMethod.PATCH, "/bootcamp/{bootcampId}").hasRole("ADMIN")
                            .antMatchers(HttpMethod.DELETE, "/bootcamp/{bootcampId}").hasRole("ADMIN")
//                .antMatchers(HttpMethod.POST, "/users/**").permitAll()  // (1) 추가
//                .antMatchers(HttpMethod.PATCH, "/users/**").hasRole("USER")  // (2) 추가
//                .antMatchers(HttpMethod.GET, "/users").hasRole("ADMIN")  // (3) 추가
//                .antMatchers(HttpMethod.GET, "/users/**").hasAnyRole("USER", "ADMIN")  // (4) 추가
//                .antMatchers(HttpMethod.DELETE, "/users/**").hasRole("USER")  // (5) 추가
                .anyRequest().permitAll()
            );
        return http.build();
    }

    // JwtAuthenticationFilter 등록하는 역할
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, memberRepository);  // DI
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login"); // 디폴트 request URL “/login”을 "/users/login"으로 변경
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());  // MemberAuthenticationSuccessHandler 적용
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());  // MemberAuthenticationFailureHandler 적용

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);  // JwtVerificationFilter 적용

            builder
                .addFilter(jwtAuthenticationFilter)  // JwtAuthenticationFilter 를 Spring Security Filter Chain 에 추가
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);  // JwtVerificationFilter 적용
        }
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
