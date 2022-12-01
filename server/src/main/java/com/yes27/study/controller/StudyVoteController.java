package com.yes27.study.controller;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.response.SingleResponseDto;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.dto.StudyDto.VoteResponse;
import com.yes27.study.entity.Study;
import com.yes27.study.repository.StudyRepository;
import com.yes27.study.service.StudyVoteService;
import java.util.Optional;
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
    private final StudyRepository studyRepository;

//    @PostMapping("/{study-id}/vote")
//    public ResponseEntity voteMember(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId) {
//        Member member = findMemberByHeader(request);
//        boolean res = false;
//        if (member != null) { res = studyVoteService.addVote(member, studyId); }
//        return res ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//    }

    @PostMapping("/votes/{study-id}")
    public ResponseEntity voteMember(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId, @RequestParam @Positive int vote) {
        Member member = findMemberByHeader(request);

        Study study = findVerifiedStudy(studyId);
//        Optional<Study> study = studyRepository.findByStudyId(studyId);
        VoteResponse response = new VoteResponse();
        response.setStudyId(studyId);
        response.setVote(vote);

        if (vote == 1) {
            if (member != null) {
                studyVoteService.addVote(member, studyId);
            }
            study.setTotalVotes(study.getVotes().size());
            response.setTotalVotes(studyVoteService.count(studyId, member));
        } else if (vote == 0) {
            if (member != null) {
                studyVoteService.cancelVote(member, studyId);
            }
            study.setTotalVotes(study.getVotes().size());
            response.setTotalVotes(studyVoteService.count(studyId, member));
        } else {
            throw new BusinessLogicException(ExceptionCode.VOTE_ERROR);
        }

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
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

    public Study findVerifiedStudy(Long studyId) {
        Optional<Study> optionalStudy = studyRepository.findById(studyId);
        Study findStudy = optionalStudy.orElseThrow(() -> new BusinessLogicException(ExceptionCode.STUDY_NOT_FOUND));

        return findStudy;
    }
}
