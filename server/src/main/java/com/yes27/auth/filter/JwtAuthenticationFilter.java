package com.yes27.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.yes27.auth.dto.LoginDto;
import com.yes27.auth.dto.NickNameDto;
import com.yes27.auth.jwt.JwtTokenizer;
import com.yes27.member.entity.Member;
import com.yes27.member.repository.MemberRepository;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// 클라이언트의 로그인 인증 요청 처리하는 엔트리포인트(Entrypoint)
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer,
        MemberRepository memberRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenizer = jwtTokenizer;
        this.memberRepository = memberRepository;
    }

    // (3)
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper();    // (3-1)
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class); // (3-2)

        // (3-3) email, password 정보를 이용하여 UsernamePasswordAuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        // (3-4) UsernamePasswordAuthenticationToken -> AuthenticationManager 전달하면서 인증 처리 위임
        return authenticationManager.authenticate(authenticationToken);
    }

    // (4) 인증에 성공할 경우 호출
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
        HttpServletResponse response,
        FilterChain chain,
        Authentication authResult) throws ServletException, IOException {
        Member member = (Member) authResult.getPrincipal();  // (4-1)

        // delegateAccessToken 메서드를 이용하여 Access Token 생성
        String accessToken = delegateAccessToken(member);
        // delegateRefreshToken 메서드를 이용하여 Refresh Token 생성
        String refreshToken = delegateRefreshToken(member);

        response.setHeader("Authorization", "Bearer " + accessToken);  // Header 에 accessToken 전달
        response.setHeader("Refresh", refreshToken);                         // Header 에 refreshToken 전달

        // 2022 11 25 로그인시 Response body 에 닉네임 추가
        Member findMember = memberRepository.findByEmail(member.getEmail()).orElseThrow();
        NickNameDto nickNameDto = new NickNameDto();
        String ninckname = findMember.getNickname();
        nickNameDto.setNickname(ninckname);

        String json = new Gson().toJson(nickNameDto);

        response.getWriter().write(json);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    // Access Token 생성 로직
    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", member.getEmail());
        claims.put("roles", member.getRoles());
//        claims.put("nickname", member.getNickname());

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    // Refresh Token 생성 로직
    private String delegateRefreshToken(Member member) {
        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
