package com.yes27.member.controller;

import com.yes27.auth.dto.LoginDto;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.dto.MemberDto;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.mapper.MentorMapper;
import com.yes27.mentoring.service.MentorService;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.mapper.PostscriptMapper;
import com.yes27.postscript.service.PostscriptService;
import com.yes27.response.SingleResponseDto;

import java.security.Principal;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study.mapper.StudyMapper;
import com.yes27.study.service.StudyService;
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
    private final StudyMapper studyMapper;
    private final StudyService studyService;
    private final MentorMapper mentorMapper;
    private final MentorService mentorService;

    private final PostscriptMapper postscriptMapper;

    private final PostscriptService postscriptService;


    public MemberController(MemberService memberService, MemberMapper mapper,
                            StudyMapper studyMapper, MentorMapper mentorMapper, PostscriptMapper postscriptMapper,
                            StudyService studyService, MentorService mentorService,PostscriptService postscriptService) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.studyMapper = studyMapper;
        this.mentorMapper = mentorMapper;
        this.postscriptMapper = postscriptMapper;
        this.studyService = studyService;
        this.mentorService = mentorService;
        this.postscriptService = postscriptService;
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

    //test
    @PostMapping("/test01")
    public ResponseEntity test01(Principal principal) {
        String email = principal.getName();
        System.out.println("==========================" + email + "=====================");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity loginMember(@Valid @RequestBody LoginDto requestBody) {
        Member member = memberService.findVerifiedMemberByEmail(requestBody.getEmail());
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToLoginDto(member)), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(HttpServletRequest request, @Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        memberService.createMember(member);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

//    @GetMapping("/mypage/uerInfo")
//    public ResponseEntity getMember(HttpServletRequest request) {
//        Member member = findMemberByHeader(request);
//
//        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
//    }

    @GetMapping("/mypage/uerInfo")
    public ResponseEntity getMember() {
        Member member = memberService.getLoginMember();

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse2(member)), HttpStatus.OK);
    }

    @GetMapping("/mypage/bootcampLike")
    public ResponseEntity getLikeSchedule(HttpServletRequest request) {
        Member member = findMemberByHeader(request);


        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    @GetMapping("/mypage/writing")
    public ResponseEntity getWriting(HttpServletRequest request) {
        Member member = findMemberByHeader(request);

        List<StudyDto.PagingResponse> studies = studyMapper.studiesToPagingResponses(studyService.findStudiesPage(member));
        List<MentorDto.Response> mentors = mentorMapper.mentorsToMentorResponseDtos(mentorService.findMentorsPage(member));

        List<PostscriptDto.PostscriptResponse> postscripts = postscriptMapper.postscriptsToPostscriptResponseDtos(postscriptService.findPostscripts(member),mapper);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberDataDto(member,postscripts,mentors, studies)), HttpStatus.OK);
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
