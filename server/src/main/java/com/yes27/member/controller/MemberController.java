package com.yes27.member.controller;

import com.yes27.member.dto.MemberDto;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.response.SingleResponseDto;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/mypage")
    public ResponseEntity getMember(@Valid @RequestBody MemberDto.Get requestBody) {
        Member member = memberService.findVerifiedMember(requestBody.getMemberId());
        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
            HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);
        return new ResponseEntity<>(
            new SingleResponseDto<>(response),
            HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive Long memberId,
        @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
        HttpStatus.OK);
    }
//
//    @PostMapping("/login/{member-id}")
//    public ResponseEntity loginMember(
//        @PathVariable("member-id") @Positive Long memberId) {
//        Member member = memberService.findVerifiedMember(memberId);
//        return new ResponseEntity<>(
//            new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
//            HttpStatus.OK);
//    }
//
//    @PostMapping("/logout/{member-id}")
//    public ResponseEntity logoutMember(
//        @PathVariable("member-id") @Positive Long memberId) {
//        Member member = memberService.findVerifiedMember(memberId);
//        return new ResponseEntity<>(
//            new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
//            HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(
        @PathVariable("member-id") @Positive Long memberId) {
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
