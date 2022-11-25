package com.yes27.mentoringcomment.controller;

import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.mentoringcomment.entity.Comment;
import com.yes27.mentoringcomment.mapper.CommentMapper;
import com.yes27.mentoringcomment.service.CommentService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/mentoring/{mentoringId}/comment")
public class CommentController {

    private final CommentService commentService;
    private final MemberService memberService;

    private final CommentMapper mapper;

    public CommentController(CommentService commentService, MemberService memberService, CommentMapper mapper) {
        this.commentService = commentService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity addComment(@PathVariable("mentoringId") @Positive long mentoringId,
                                     @Valid @RequestBody CommentDto.Post commentPostDto,
                                     HttpServletRequest request){
        String email = request.getUserPrincipal().getName();
        Member member = memberService.findVerifiedMemberByEmail(email);
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        CommentDto.commmentResponse response = mapper.commentToCommentsResponseDto(commentService.create(mentoringId,comment,member));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity updateComment(@PathVariable("commentId") @Positive long commentId,
                                     @PathVariable("mentoringId") @Positive long mentoringId,
                                     @RequestBody CommentDto.Patch commentPatchDto,
                                        HttpServletRequest request ){
        String email = request.getUserPrincipal().getName();
        Member member = memberService.findVerifiedMemberByEmail(email);
        Comment comment = mapper.commentPatchDtoToComment(commentPatchDto);
        CommentDto.commmentResponse response = mapper.commentToCommentsResponseDto(commentService.update(mentoringId,comment,commentId,member));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

//    @GetMapping("/{commentId}")
//    public ResponseEntity getComment(@PathVariable("commentId") @Positive long commentId,
//                                        @PathVariable("mentoringId") long mentoringId){
//        CommentDto.Response response = mapper.commentToCommentResponseDto(commentService.findComment(commentId));
//
//        return new ResponseEntity(HttpStatus.OK);
//    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@PathVariable("mentoringId") @Positive long mentoringId,
                                        @PathVariable("commentId") @Positive long commentId,
                                        HttpServletRequest request){
        String email = request.getUserPrincipal().getName();
        Member member = memberService.findVerifiedMemberByEmail(email);
        commentService.delete(commentId, member);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
