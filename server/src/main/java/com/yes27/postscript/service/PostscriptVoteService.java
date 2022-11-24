package com.yes27.postscript.service;

import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.postscript.entity.PostscriptVote;
import com.yes27.postscript.repository.PostscriptVoteRepository;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.stereotype.Service;

@Service
public class PostscriptVoteService {

    private PostscriptService postscriptService;
    private PostscriptVoteRepository postscriptVoteRepository;

    private MemberService memberService;

    public PostscriptVoteService(PostscriptService postscriptService,
                                 PostscriptVoteRepository postscriptVoteRepository,
                                 MemberService memberService) {

        this.postscriptService = postscriptService;
        this.postscriptVoteRepository = postscriptVoteRepository;
        this.memberService = memberService;
    }

    public PostscriptVote votePostscript(long postscriptId, int vote) {

        Member member = memberService.getLoginMember();

        PostscriptVote postscriptVote = postscriptVoteRepository.findByPostscriptAndMember(
                postscriptService.findVerifiedPostscript(postscriptId), member);


        if (postscriptVote == null) {
            PostscriptVote newVote = new PostscriptVote();
            newVote.addPostscript(postscriptService.findVerifiedPostscript(postscriptId));
            newVote.setVote(vote);
            newVote.addMember(member);
            postscriptVoteRepository.save(newVote);
            postscriptService.refreshVotes(postscriptId);
            return newVote;

        } else {
            postscriptVote.setVote(vote);
            postscriptVoteRepository.save(postscriptVote);
            postscriptService.refreshVotes(postscriptId);
            return postscriptVote;
        }
    }

    public int getVotes(long postscriptId) {
        int votes = postscriptVoteRepository.findVoteValue(postscriptId);
        return votes;
    }
}
