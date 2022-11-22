package com.yes27.study.controller;

import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study.mapper.StudyMapper;
import com.yes27.study.service.StudyService;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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

    public StudyController(MemberService memberService,
        StudyService studyService, StudyMapper mapper) {
        this.memberService = memberService;
        this.studyService = studyService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postStudy(@Valid @RequestBody StudyDto.Post requestBody) {

        Member member = memberService.findVerifiedMember(requestBody.getMemberId());

        Study study = mapper.studyPostToStudy(requestBody);
        study.setMember(member);

        Study createdStudy = studyService.createStudy(study);

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.studyToPostResponse(createdStudy)),
            HttpStatus.CREATED);
    }

    @PatchMapping("/{study-id}")
    public ResponseEntity patchStudy(
        @PathVariable("study-id") @Positive Long studyId,
        @Valid @RequestBody StudyDto.Patch requestBody) {
        requestBody.setStudyId(studyId);
        Study study =
            studyService.updateStudy(mapper.studyPatchToStudy(requestBody));

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.studyToStudyResponse(study)),
            HttpStatus.OK);
    }

    @GetMapping("/{study-id}")
    public ResponseEntity getStudy(
        @PathVariable("study-id") @Positive Long studyId) {
        Study study = studyService.findStudy(studyId);

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.studyToStudyResponse(study)),
            HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getStudies(@Positive @RequestParam int page,
        @Positive @RequestParam int size) {
        Page<Study> pageStudies = studyService.findStudies(page-1, size);
        List<Study> studies = pageStudies.getContent();

        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.studiesToStudyResponses(studies),
            pageStudies),
        HttpStatus.OK);
    }

    @DeleteMapping("/{study-id}")
    public ResponseEntity deleteStudy(
        @PathVariable("study-id") @Positive Long studyId) {
        studyService.deleteStudy(studyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
