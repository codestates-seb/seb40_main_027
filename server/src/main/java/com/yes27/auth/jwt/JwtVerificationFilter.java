package com.yes27.auth.jwt;

import com.yes27.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
        CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        Map<String, Object> claims = verifyJws(request);  // verifyJws() 메서드는 JWT 검증하는데 사용되는 메서드
//        setAuthenticationToContext(claims);  // Authentication 객체를 SecurityContext 에 저장하기 위한 메서드
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);
    }

    // (6)
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");  // Authorization header 값을 얻은 후

        return authorization == null || !authorization.startsWith("Bearer");  // Authorization header 값이 null 또는 “Bearer”로 시작하지 않는다면 해당 Filter 의 동작을 수행하지 않도록 정의
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");  // request header 에서 JWT 를 얻음
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());  // JWT 서명 검증을 위해 Secret Key 를 얻음
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();  // JWT 에서 Claims 를 파싱 (서명 검증에 성공했다는 의미)

        return claims;  //  Claims 가 정상적으로 파싱 -> 서명 검증 역시 성공
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("email");  // JWT 파싱한 Claims 에서 email 을 얻음
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));  // JWT Claims 에서 얻은 권한 정보를 기반으로 List<GrantedAuthority 생성
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);  // username, List<GrantedAuthority 를 포함한 Authentication 객체 생성
        SecurityContextHolder.getContext().setAuthentication(authentication);  // SecurityContext 에 Authentication 객체 저장
    }
}
