package com.yes27.postscript.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.postscript.dto.PostscriptVoteResponseDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptVote;
import com.yes27.postscript.repository.PostscriptVoteRepository;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostscriptVoteService {

    private PostscriptService postscriptService;
    private PostscriptVoteRepository postscriptVoteRepository;

    private MemberService memberService;
    private PostscriptRepository postscriptRepository;

    public PostscriptVoteService(PostscriptService postscriptService,
                                 PostscriptVoteRepository postscriptVoteRepository,
                                 MemberService memberService,
                                 PostscriptRepository postscriptRepository) {

        this.postscriptService = postscriptService;
        this.postscriptVoteRepository = postscriptVoteRepository;
        this.memberService = memberService;
        this.postscriptRepository = postscriptRepository;
    }

    public PostscriptVote votePostscript(Postscript postscript,Member member, int vote, long postscriptId) {

        PostscriptVote findVote = findVote(postscript, member);
        Postscript postscript1 = findVerifiedPostscript(postscriptId);
        PostscriptVoteResponseDto voteResponseDto = new PostscriptVoteResponseDto();
        voteResponseDto.setPostscriptId(postscriptId);


        int sumVote = 0;

        if (vote == 1) {
            sumVote = 1;
            if (findVote.getVote() == 1) {
                sumVote = 0;
            }
            findVote.setVote(1);
            //좋아요 취소
        } else if (vote == 0) {
            findVote.setVote(0);
            if (getTotalVotes(postscript) > 0) {
                sumVote = -1;
            }

        }
        int totalVote = getTotalVotes(postscript) + sumVote;
        findVote.setTotalVotes(totalVote);
        findVote.setPostscript(postscript);
        findVote.setMember(member);
        findVote.setVote(vote);
        postscriptService.updateTotalVotes(postscript, totalVote,vote);
        return postscriptVoteRepository.save(findVote);
    }
        public int getTotalVotes(Postscript postscript){
            int totalVotes = postscriptVoteRepository.findTotalVoteValue(postscript);
            return totalVotes;
        }
//        Member member = memberService.getLoginMember();
//
//        PostscriptVote postscriptVote = postscriptVoteRepository.findByPostscriptAndMember(
//                postscriptService.findVerifiedPostscript(postscriptId), member);
//
//
//        if (postscriptVote == null) {
//            PostscriptVote newVote = new PostscriptVote();
//            newVote.addPostscript(postscriptService.findVerifiedPostscript(postscriptId));
//            newVote.setVote(vote);
//            newVote.addMember(member);
//            postscriptVoteRepository.save(newVote);
//            postscriptService.refreshVotes(postscriptId);
//            return newVote;
//
//        } else {
//            postscriptVote.setVote(vote);
//            postscriptVoteRepository.save(postscriptVote);
//            postscriptService.refreshVotes(postscriptId);
//            return postscriptVote;
//        }

    // 멤버가 투표했는지 여부
    public PostscriptVote findVote(Postscript postscript, Member member){
        Optional<PostscriptVote> optionalPostscriptVote = postscriptVoteRepository.findByPostscriptAndMember(postscript, member);
        PostscriptVote findVote = optionalPostscriptVote.orElseGet(()->new PostscriptVote());
        return findVote;
    }

    public Postscript findVerifiedPostscript(Long postscriptId){
        Optional<Postscript> optionalPostscript=postscriptRepository.findById(postscriptId);
        Postscript findPostscript = optionalPostscript.orElseThrow(()->new BusinessLogicException(ExceptionCode.POSTSCRIPT_NOT_FOUND));
        return findPostscript;
    }
}
