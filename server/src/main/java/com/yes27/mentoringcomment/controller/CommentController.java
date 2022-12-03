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

@CrossOrigin(origins = {"http://bootlamp.s3-website.ap-northeast-2.amazonaws.com",
    "http://ec2-3-38-21-95.ap-northeast-2.compute.amazonaws.com:8080"})
@RestController
@Validated
@RequestMapping("/mentoring")
public class CommentController {

    private final CommentService commentService;
    private final MemberService memberService;

    private final CommentMapper mapper;

    public CommentController(CommentService commentService, MemberService memberService, CommentMapper mapper) {
        this.commentService = commentService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/{mentoringId}/comment")
    public ResponseEntity addComment(@PathVariable("mentoringId") @Positive long mentoringId,
                                     @Valid @RequestBody CommentDto.Post commentPostDto,
                                     HttpServletRequest request){
        Member findMember = memberService.findMember(request);
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        commentService.create(mentoringId,comment,findMember);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PatchMapping("comment/{commentId}")
    public ResponseEntity updateComment(@PathVariable("commentId") @Positive long mentoringCommentId,
                                    @Valid @RequestBody CommentDto.Patch commentPatchDto,
                                        HttpServletRequest request ){
        Member findMember = memberService.findMember(request);
        Comment comment = mapper.commentPatchDtoToComment(commentPatchDto);
        comment.setMentoringCommentId(mentoringCommentId);
       commentService.update(comment,findMember);

        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("comment/{commentId}")
    public ResponseEntity deleteComment(@PathVariable("commentId") @Positive long mentoringCommentId,
                                        HttpServletRequest request){
        Member findMember = memberService.findMember(request);
        commentService.delete(mentoringCommentId, findMember);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
