package com.yes27.postscripcomment.controller;

import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscripcomment.mapper.PostscriptCommentMapper;
import com.yes27.postscripcomment.repository.PostscriptCommentRepository;
import com.yes27.postscripcomment.service.PostscriptCommentService;
import com.yes27.postscript.service.PostscriptService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/postscript")
public class PostscriptCommentController {

    private final PostscriptCommentService postscriptCommentService;
    private final PostscriptCommentMapper postscriptCommentMapper;
    private final PostscriptCommentRepository postscriptCommentRepository;
    private final PostscriptService postscriptService;

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    public PostscriptCommentController(MemberService memberService,
                                       MemberMapper memberMapper,
                                       PostscriptCommentService postscriptCommentService,
                                       PostscriptCommentMapper postscriptCommentMapper,
                                       PostscriptCommentRepository postscriptCommentRepository,
                                       PostscriptService postscriptService
                                       ){


        this.postscriptCommentMapper = postscriptCommentMapper;
        this.postscriptCommentService = postscriptCommentService;
        this.postscriptCommentRepository = postscriptCommentRepository;
        this.postscriptService = postscriptService;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping("/{postscript-Id}/comment")
    public ResponseEntity postPostComment(@PathVariable("postscript-Id") @Positive @NotNull long postscriptId,
                                          @Valid @RequestBody PostscriptCommentDto.Post postscriptCommentPostDto) {


        PostscriptComment postscriptComment = postscriptCommentService.createPostComment(
                postscriptCommentMapper.postCommentPostToPostComment(postscriptId,postscriptService,postscriptCommentPostDto,memberService));

        return new  ResponseEntity<>(
                new SingleResponseDto<>(postscriptCommentMapper.postCommentToPostCommentResponseDto(postscriptComment, memberMapper)), HttpStatus.CREATED);
    }

    @PatchMapping("/comment/{postComment-id}")
    public ResponseEntity patchPostComment(@PathVariable("postComment-id") @Positive long postCommentId,
                                           @Valid @RequestBody PostscriptCommentDto.Patch postscriptCommentPatchDto){
        postscriptCommentPatchDto.setPostCommentId(postCommentId);
        PostscriptComment postscriptComment = postscriptCommentMapper.postCommentPatchToPostComment(postscriptCommentService, postscriptCommentPatchDto, memberService);

        PostscriptComment updatedPostscriptComment = postscriptCommentService.updatePostComment(postscriptComment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptCommentMapper.postCommentToPostCommentResponseDto(updatedPostscriptComment, memberMapper)), HttpStatus.OK);

    }

    @GetMapping("/comment/{postComment-id}")
    public ResponseEntity getPostComment(@PathVariable("postComment-id")@Positive long postCommentId){

        PostscriptComment postscriptComment = postscriptCommentService.findPostComment(postCommentId);
        PostscriptComment updatedPostComment = postscriptCommentService.updatePostComment(postscriptComment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptCommentMapper.postCommentToPostCommentResponseDto(postscriptComment,memberMapper)), HttpStatus.OK);

    }

    @DeleteMapping("/comment/delete/{postComment-id}")
    public ResponseEntity deletePostComment(@PathVariable("postComment-id")@Positive long postCommentId){

        postscriptCommentService.deletePostComment(postCommentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
