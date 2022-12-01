package com.yes27.mentoringLike.controller;


import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.service.MentorService;
import com.yes27.mentoringLike.dto.MentoringVoteDto;
import com.yes27.mentoringLike.mapper.MentoringVoteMapper;
import com.yes27.mentoringLike.service.MentoringVoteService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/mentoring/votes/{mentoringId}")
public class MentoringVoteController {

    private final MentoringVoteService mentoringVoteService;
    private final MemberService memberService;

    private final MentoringVoteMapper mapper;

    private final MentorService mentorService;

    public MentoringVoteController(MentoringVoteService mentoringVoteService, MemberService memberService, MentoringVoteMapper mapper, MentorService mentorService) {
        this.mentoringVoteService = mentoringVoteService;
        this.memberService = memberService;
        this.mapper = mapper;
        this.mentorService = mentorService;
    }

    //게시글 좋아요
    @PostMapping
    public ResponseEntity postVote(@PathVariable("mentoringId") @Positive Long mentoringId,
                                   @RequestParam int vote,
                                   HttpServletRequest request){
        Member member = memberService.findMember(request);
        Mentor mentor = mentorService.findVerifiedMentor(mentoringId);
        MentoringVoteDto.Response response = mapper.mentoringToVoteResponseDto(mentoringVoteService.upVote(mentor,member,vote));
        return new ResponseEntity(new SingleResponseDto<>(response),HttpStatus.OK);
    }
}
