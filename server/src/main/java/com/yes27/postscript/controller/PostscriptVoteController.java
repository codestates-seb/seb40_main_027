package com.yes27.postscript.controller;

import com.yes27.member.service.MemberService;
import com.yes27.postscript.entity.PostscriptVote;
import com.yes27.postscript.mapper.PostscriptVoteMapper;
import com.yes27.postscript.service.PostscriptVoteService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/postscript")
@CrossOrigin
public class PostscriptVoteController {

    private final PostscriptVoteService postscriptVoteService;
    private final PostscriptVoteMapper postscriptVoteMapper;
    private final MemberService memberService;

    public PostscriptVoteController(PostscriptVoteService postscriptVoteService,
                                    PostscriptVoteMapper postscriptVoteMapper,
                                    MemberService memberService) {

        this.postscriptVoteService = postscriptVoteService;
        this.postscriptVoteMapper = postscriptVoteMapper;
        this.memberService = memberService;
    }

    @PostMapping("/votes/{postscript-Id}")
    public ResponseEntity votePostscript(@PathVariable("postscript-Id") @Positive @NotNull long postscriptId,
                                         @RequestParam(value = "vote", defaultValue = "0") int vote) {

        PostscriptVote postscriptVote = postscriptVoteService.votePostscript(postscriptId, vote);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptVoteMapper.postVoteToPostVoteDto(postscriptVote)), HttpStatus.OK);
    }
}
