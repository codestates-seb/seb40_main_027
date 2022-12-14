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
import java.util.List;
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
//            .cors(withDefaults())
            .cors().configurationSource(corsConfigurationSource())  // cors ?????? ??????
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // ?????? ?????? ???????????? ????????? ??????
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // (1) ??????
            .accessDeniedHandler(new MemberAccessDeniedHandler())            // (2) ??????
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
            .authorizeHttpRequests(authorize -> authorize
                            .antMatchers(HttpMethod.PATCH, "/bootcamp/{bootcampId}").hasRole("ADMIN")
                            .antMatchers(HttpMethod.DELETE, "/bootcamp/{bootcampId}").hasRole("ADMIN")
//                .antMatchers(HttpMethod.POST, "/users/**").permitAll()  // (1) ??????
//                .antMatchers(HttpMethod.PATCH, "/users/**").hasRole("USER")  // (2) ??????
//                .antMatchers(HttpMethod.GET, "/users").hasRole("ADMIN")  // (3) ??????
//                .antMatchers(HttpMethod.GET, "/users/**").hasAnyRole("USER", "ADMIN")  // (4) ??????
//                .antMatchers(HttpMethod.DELETE, "/users/**").hasRole("USER")  // (5) ??????
                .anyRequest().permitAll()
            );
        return http.build();
    }

    // JwtAuthenticationFilter ???????????? ??????
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, memberRepository);  // DI
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login"); // ????????? request URL ???/login?????? "/users/login"?????? ??????
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());  // MemberAuthenticationSuccessHandler ??????
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());  // MemberAuthenticationFailureHandler ??????

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);  // JwtVerificationFilter ??????

            builder
                .addFilter(jwtAuthenticationFilter)  // JwtAuthenticationFilter ??? Spring Security Filter Chain ??? ??????
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);  // JwtVerificationFilter ??????
        }
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setExposedHeaders(Arrays.asList("Authorization", "Refresh"));
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
//        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedOrigin("https://api.mozzidev.com");
        configuration.addAllowedOrigin("http://bootlamp.s3-website.ap-northeast-2.amazonaws.com");
//        configuration.addAllowedOrigin("http://localhost:8080");
        configuration.setAllowCredentials(true);
        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PATCH"));
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
