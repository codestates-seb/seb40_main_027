package com.yes27.study.controller;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.study.service.StudyVoteService;
import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/study")
public class StudyVoteController {
    private final StudyVoteService studyVoteService;
    private final MemberService memberService;

//    @PostMapping("/{study-id}/vote")
//    public ResponseEntity voteMember(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId) {
//        Member member = findMemberByHeader(request);
//        boolean res = false;
//        if (member != null) { res = studyVoteService.addVote(member, studyId); }
//        return res ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//    }

    @PostMapping("/{study-id}")
    public ResponseEntity voteMember(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId, @RequestParam @Positive int vote) {
        Member member = findMemberByHeader(request);
        if (vote == 1) {
            boolean res = false;
            if (member != null) {
                res = studyVoteService.addVote(member, studyId);
            }
            return res ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (vote == 0) {
            boolean res =  false;
            if (member != null) {
                res = studyVoteService.removeVote(member, studyId);
            }
            return res ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            throw new BusinessLogicException(ExceptionCode.VOTE_ERROR);
        }
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
