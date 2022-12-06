package com.yes27.postscripcomment.controller;

import com.yes27.member.entity.Member;
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
    ) {


        this.postscriptCommentMapper = postscriptCommentMapper;
        this.postscriptCommentService = postscriptCommentService;
        this.postscriptCommentRepository = postscriptCommentRepository;
        this.postscriptService = postscriptService;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    /** 게시글 댓글 작성
     *
     * @param postscriptId
     * @param postscriptCommentPostDto
     * @return
     */
    @PostMapping("/{postscript-Id}/comment")
    public ResponseEntity postPostComment(@PathVariable("postscript-Id") @Positive @NotNull long postscriptId,
                                          @Valid @RequestBody PostscriptCommentDto.Post postscriptCommentPostDto) {


        PostscriptComment postscriptComment = postscriptCommentMapper.postCommentPostToPostComment(postscriptId, postscriptService, postscriptCommentPostDto, memberService);
        postscriptCommentService.createPostComment(postscriptId, postscriptComment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /** 게시글 댓글 수정
     *
     * @param postscriptCommentId
     * @param postscriptCommentPatchDto
     * @return
     */
    @PatchMapping("/comment/{postscriptCommentId}")
    public ResponseEntity patchPostComment(@PathVariable("postscriptCommentId") @Positive long postscriptCommentId,
                                           @Valid @RequestBody PostscriptCommentDto.Patch postscriptCommentPatchDto) {


        postscriptCommentPatchDto.setPostscriptCommentId(postscriptCommentId);
        PostscriptComment postscriptComment = postscriptCommentMapper.postCommentPatchToPostComment(postscriptCommentService, postscriptCommentPatchDto, memberService);

        PostscriptComment updatedPostscriptComment = postscriptCommentService.updatePostComment(postscriptComment);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /** 작성된 댓글만 조회
     *
     * @param postscriptCommentId
     * @return
     */
    @GetMapping("/comment/{postscriptCommentId}")
    public ResponseEntity getPostComment(@PathVariable("postscriptCommentId") @Positive long postscriptCommentId
    ) {

        PostscriptComment postscriptComment = postscriptCommentService.findPostComment(postscriptCommentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptCommentMapper.postCommentToPostCommentResponseDto(postscriptComment, memberMapper)), HttpStatus.OK);

    }

    /** 댓글 삭제
     *
     * @param postscriptCommentId
     * @return
     */
    @DeleteMapping("/comment/{postscriptCommentId}")
    public ResponseEntity deletePostComment(@PathVariable("postscriptCommentId") @Positive long postscriptCommentId) {
        Member member = memberService.getLoginMember();
        postscriptCommentService.deletePostComment(postscriptCommentId, member.getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
