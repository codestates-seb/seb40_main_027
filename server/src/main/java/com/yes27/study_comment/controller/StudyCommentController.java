package com.yes27.study_comment.controller;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.response.SingleResponseDto;
import com.yes27.study.entity.Study;
import com.yes27.study.service.StudyService;
import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.entity.StudyComment;
import com.yes27.study_comment.mapper.StudyCommentMapper;
import com.yes27.study_comment.service.StudyCommentService;
import javax.servlet.http.HttpServletRequest;
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
@RequestMapping("/study")
@Validated
@Slf4j
public class StudyCommentController {
    private final MemberService memberService;
    private final StudyService studyService;
    private final StudyCommentService studyCommentService;
    private final StudyCommentMapper mapper;

    public StudyCommentController(MemberService memberService, StudyService studyService,
        StudyCommentService studyCommentService, StudyCommentMapper mapper) {
        this.memberService = memberService;
        this.studyService = studyService;
        this.studyCommentService = studyCommentService;
        this.mapper = mapper;
    }

    @PostMapping("/{study-id}/comment")
    public ResponseEntity postComment(HttpServletRequest request, @PathVariable("study-id") @Positive Long studyId, @Valid @RequestBody StudyCommentDto.Post requestBody) {
        Member member = findMemberByHeader(request);
        Study findStudy = studyService.findVerifiedStudy(studyId);

        requestBody.setStudyId(studyId);
        StudyComment studyComment = mapper.commentPostToComment(requestBody);
        studyComment.setMember(member);
        studyComment.setStudy(findStudy);

        StudyComment createdComment = studyCommentService.createComment(studyComment);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.commentToCommentResponse(createdComment)), HttpStatus.CREATED);
    }

    // TODO studyId 제거
    @PatchMapping("/comment/{comment-id}")
    public ResponseEntity patchComment(HttpServletRequest request, @PathVariable("comment-id") @Positive Long studyCommentId, @Valid @RequestBody StudyCommentDto.Patch requestBody) {
        Member member = findMemberByHeader(request);
//        Study findStudy = studyService.findVerifiedStudy(studyId);
        StudyComment studyComment = studyCommentService.findVerifiedComment(studyCommentId);

        if (member.getMemberId() != studyComment.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.PERMISSION_ERROR);
        }

        requestBody.setStudyCommentId(studyCommentId);
        StudyComment findStudyComment = mapper.commentPatchToComment(requestBody);
//        findStudyComment.setStudy(findStudy);

        StudyComment updatedStudyComment = studyCommentService.updateComment(findStudyComment);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.commentToCommentResponse(updatedStudyComment)), HttpStatus.OK);
    }

    // TODO studyId 제거
    @GetMapping("/comment/{comment-id}")
    public ResponseEntity getComment(HttpServletRequest request, @PathVariable("comment-id") @Positive Long studyCommentId) {
//        Member member = findMemberByHeader(request);
        StudyComment studyComment = studyCommentService.findComment(studyCommentId);

        return new ResponseEntity<>(mapper.commentToCommentResponse(studyComment), HttpStatus.OK);
    }

    // TODO studyId 제거
    @DeleteMapping("/comment/{comment-id}")
    public ResponseEntity deleteComment(HttpServletRequest request, @PathVariable("comment-id") @Positive Long studyCommentId) {
        Member member = findMemberByHeader(request);
        StudyComment studyComment = studyCommentService.findVerifiedComment(studyCommentId);

        if (member.getMemberId() != studyComment.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.PERMISSION_ERROR);
        }

        studyCommentService.deleteComment(studyCommentId);

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
