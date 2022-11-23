package com.yes27.member.controller;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.dto.MemberDto;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.response.SingleResponseDto;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    //test
    @PostMapping("/test")
    public ResponseEntity test(HttpServletRequest request) {
        String email = request.getUserPrincipal().getName();
        if (email == null) {
            throw new BusinessLogicException(ExceptionCode.TOKEN_NOT_FOUND);
        }
        System.out.println(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(HttpServletRequest request, @Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        memberService.createMember(member);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/mypage")
    public ResponseEntity getMember(HttpServletRequest request) {
        Member member = findMemberByHeader(request);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity patchMember(HttpServletRequest request, @Valid @RequestBody MemberDto.Patch requestBody) {
        Member member = findMemberByHeader(request);
        Member updatedMember = memberService.updateMember(member, requestBody);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToPatchResponse(member)), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember(HttpServletRequest request) {
        Member member = findMemberByHeader(request);
        memberService.deleteMember(member);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/logout")
    public ResponseEntity logoutMember(HttpServletRequest request) {
        Member member = findMemberByHeader(request);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    // http header 토큰으로 유저 찾는 메소드
    public Member findMemberByHeader(HttpServletRequest request) {
        String email = request.getUserPrincipal().getName();
        if (email == null) {
            throw new BusinessLogicException(ExceptionCode.TOKEN_NOT_FOUND);
        }
        Member member = memberService.findVerifiedMemberByEmail(email);
        return member;
    }
}
