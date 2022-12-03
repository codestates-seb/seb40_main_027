package com.yes27.study.controller;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study.entity.StudyVote;
import com.yes27.study.mapper.StudyMapper;
import com.yes27.study.service.StudyService;
import com.yes27.study.service.StudyViewService;
import com.yes27.study.service.StudyVoteService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/study")
@Validated
@Slf4j
public class StudyController {
    private final MemberService memberService;
    private final StudyService studyService;
    private final StudyMapper mapper;
    private final StudyViewService studyViewService;
    private final StudyVoteService studyVoteService;

    public StudyController(MemberService memberService,
        StudyService studyService, StudyMapper mapper ,
        StudyViewService studyViewService, StudyVoteService studyVoteService) {
        this.memberService = memberService;
        this.studyService = studyService;
        this.mapper = mapper;
        this.studyViewService = studyViewService;
        this.studyVoteService = studyVoteService;
    }

    @PostMapping
    public ResponseEntity postStudy(HttpServletRequest request, @Valid @RequestBody StudyDto.Post requestBody) {
        Member member = findMemberByHeader(request);
        Study study = mapper.studyPostToStudy(requestBody);
        Study createdStudy = studyService.createStudy(member, study);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.studyToPostResponse(createdStudy)), HttpStatus.CREATED);
    }

    @PatchMapping("/{study-id}")
    public ResponseEntity patchStudy(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId, @Valid @RequestBody StudyDto.Patch requestBody) {
        Member member = findMemberByHeader(request);
        requestBody.setStudyId(studyId);
        Study updatedStudy = studyService.updateStudy(member, requestBody);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.studyToPatchResponse(updatedStudy)), HttpStatus.OK);
    }

    @GetMapping("/{study-id}")
    public ResponseEntity getStudy(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId) {
        if (request.getHeader("Authorization") == null && request.getHeader("Refresh") == null) {
            Study study = studyService.findStudy(studyId);
            StudyDto.Response response = mapper.studyToStudyResponse(study);
            response.setVote(0);
//            return new ResponseEntity<>(new SingleResponseDto<>(mapper.studyToStudyResponse(study)), HttpStatus.OK);
            return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
        } else {
            Member member = findMemberByHeader(request);
            Study study = studyService.findStudy(studyId);
            studyViewService.addView(member, studyId);
            study.setView(study.getViews().size());

            StudyDto.Response response = mapper.studyToStudyResponse(study);

            if (studyVoteService.isNotAlreadyVote(member, study)) {
                response.setVote((0));
            } else {
                response.setVote(1);
            }
            return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
        }
    }

    @GetMapping
    public ResponseEntity getStudies(@Positive @RequestParam int page, @Positive @RequestParam int size, @RequestParam(value = "sort") String sort) {
//        Member member = findMemberByHeader(request);
        if (sort.equals("studyId")) {
            Page<Study> pageStudies = studyService.findStudies(page-1, size);
            List<Study> studies = pageStudies.getContent();
            return new ResponseEntity<>(new MultiResponseDto<>(mapper.studiesToPagingResponses(studies), pageStudies), HttpStatus.OK);
        } else if (sort.equals("view")) {
            Page<Study> pageStudies = studyService.findStudiesByView(page-1, size);
            List<Study> studies = pageStudies.getContent();
            return new ResponseEntity<>(new MultiResponseDto<>(mapper.studiesToPagingResponses(studies), pageStudies), HttpStatus.OK);
        } else if (sort.equals("totalVotes")) {
            Page<Study> pageStudies = studyService.findStudiesByVote(page-1, size);
            List<Study> studies = pageStudies.getContent();
            return new ResponseEntity<>(new MultiResponseDto<>(mapper.studiesToPagingResponses(studies), pageStudies), HttpStatus.OK);
        } else {
            throw new BusinessLogicException(ExceptionCode.SORT_NOT_VALID);
        }
    }

    @DeleteMapping("/{study-id}")
    public ResponseEntity deleteStudy(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId) {
        Member member = findMemberByHeader(request);
        studyService.deleteStudy(member, studyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
