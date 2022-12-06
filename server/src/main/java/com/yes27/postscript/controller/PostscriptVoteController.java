package com.yes27.postscript.controller;

import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.postscript.dto.PostscriptVoteResponseDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptVote;
import com.yes27.postscript.mapper.PostscriptVoteMapper;
import com.yes27.postscript.service.PostscriptService;
import com.yes27.postscript.service.PostscriptVoteService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/postscript")
public class PostscriptVoteController {

    private final PostscriptVoteService postscriptVoteService;
    private final PostscriptVoteMapper postscriptVoteMapper;
    private final MemberService memberService;
    private final PostscriptService postscriptService;

    public PostscriptVoteController(PostscriptVoteService postscriptVoteService,
                                    PostscriptVoteMapper postscriptVoteMapper,
                                    MemberService memberService,
                                    PostscriptService postscriptService) {

        this.postscriptVoteService = postscriptVoteService;
        this.postscriptVoteMapper = postscriptVoteMapper;
        this.memberService = memberService;
        this.postscriptService = postscriptService;
    }

    /** 좋아요 표시 기능 -> 1 좋아요 추가/ 0 좋아요 초기화
     *
     * @param postscriptId
     * @param vote
     * @param request
     * @return
     */
    @PostMapping("/votes/{postscript-Id}")
    public ResponseEntity votePostscript(@PathVariable("postscript-Id") @Positive Long postscriptId,
                                         @RequestParam(value = "vote") int vote,
                                         HttpServletRequest request) {

        Member member = memberService.findMember(request);
        Postscript postscript = postscriptService.findVerifiedPostscript(postscriptId);

        PostscriptVoteResponseDto postscriptVote = postscriptVoteMapper
                .postscriptToVoteResponseDto(postscriptVoteService.votePostscript(postscript, member, vote, postscriptId));

        return new ResponseEntity(new SingleResponseDto<>(postscriptVote), HttpStatus.OK);
    }
}
