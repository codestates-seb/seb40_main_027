package com.yes27.postscript.service;

import com.yes27.member.entity.Member;
import com.yes27.postscript.repository.PostscriptVoteRepository;
import org.springframework.context.annotation.Lazy;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostscriptService {

    private final PostscriptRepository postscriptRepository;
    private final PostscriptVoteService postscriptVoteService;
    //    private final TagRepository tagRepository;
    private final PostscriptVoteRepository postscriptVoteRepository;
    private final PostscriptViewService postscriptViewService;


    public PostscriptService(PostscriptRepository postscriptRepository,
                             @Lazy PostscriptVoteService postscriptVoteService,
                             PostscriptVoteRepository postscriptVoteRepository,
                             PostscriptViewService postscriptViewService
//                             ,TagRepository tagRepository
    ) {
        this.postscriptRepository = postscriptRepository;
        this.postscriptVoteService = postscriptVoteService;
        this.postscriptVoteRepository = postscriptVoteRepository;
//        this.tagRepository = tagRepository;
        this.postscriptViewService = postscriptViewService;
    }

    public Postscript createPostscript(Postscript postscript) {
        postscript.setView(0);

        return postscriptRepository.save(postscript);
    }

    public Postscript NotLoginView(long postscriptId) {
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        postscriptRepository.save(findPostscript);
        return findPostscript;
    }

    public Postscript LoginView(long postscriptId, Member member) {
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        findPostscript.setView(findPostscript.getView() + postscriptViewService.addView(findPostscript, member));
        return postscriptRepository.save(findPostscript);
    }


    public void deletePostscript(long postscriptId, long memberId) { //삭제
        Postscript findPostscript = findVerifiedPostscript(postscriptId);

        long writerPostscriptId = findWritePostscriptId(postscriptId);

        if (memberId != writerPostscriptId) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
        }
        findPostscript.setPostscriptStatus(Postscript.PostscriptStatus.POSTSCRIPT_NOT_EXIST);
        postscriptRepository.save(findPostscript);  // db에 질문은 남기고 존재 유무로 삭제 결정
    }


    //1기준 최신순 -> postscriptId
    public Page<Postscript> findLatestPostscripts(int page, int size) {

        Page<Postscript> findAllPostscript = postscriptRepository.findAllByPostscriptStatus(
                PageRequest.of(page, size, Sort.by("postscriptId").descending()),
                Postscript.PostscriptStatus.POSTSCRIPT_EXIST);

        return findAllPostscript;
    }

    // 1기준 views/votes/  -> 2기준 최신순.
    public Page<Postscript> findSortPostscripts(int page, int size, String sort) {

        Page<Postscript> findAllPostscript = postscriptRepository.findAllByPostscriptStatus(
                PageRequest.of(page, size, Sort.by(Sort.Order.desc(sort), Sort.Order.desc("postscriptId"))),
                Postscript.PostscriptStatus.POSTSCRIPT_EXIST);

        return findAllPostscript;
    }

    //마이페이지에 이용
    public List<Postscript> findPostscripts(Member member) {
        return postscriptRepository.findAllByMemberAndPostscriptStatus(member, Postscript.PostscriptStatus.POSTSCRIPT_EXIST);
    }

    public Postscript updatePostscript(Postscript postscript) { // 수정

        Postscript findPostscript = findVerifiedPostscript(postscript.getPostscriptId());
        findPostscript.setPostscriptTitle(postscript.getPostscriptTitle());
        findPostscript.setPostscriptContent(postscript.getPostscriptContent());
        findPostscript.setTagName(postscript.getTagName());

        Postscript updatedPostscript = postscriptRepository.save(findPostscript);
        return updatedPostscript;
    }


    public Member findPostscriptWriter(long postscriptId) {
        // 질문 작성자만 질문을 수정, 삭제할 수 있도록 질문 작성자를 찾는 메서드
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        return findPostscript.getMember();
    }

    public long findWritePostscriptId(long postscriptId) {
        // 질문 작성자 아이디 찾는 메서드
        Postscript postscript = findVerifiedPostscript(postscriptId);
        return postscript.getMember().getMemberId();
    }


    public Postscript findVerifiedPostscript(long postscriptId) { // 유효한 질문인지 확인
        Optional<Postscript> optionalQuestion = postscriptRepository.findById(postscriptId);
        Postscript findPostscript = optionalQuestion.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.POSTSCRIPT_NOT_FOUND));

        if (findPostscript.getPostscriptStatus() == Postscript.PostscriptStatus.POSTSCRIPT_NOT_EXIST) {
            throw new BusinessLogicException(ExceptionCode.POSTSCRIPT_NOT_FOUND);
        } // 해당 글 없거나 삭제된 경우 ExceptionCode 발생
        return findPostscript;
    }

    public Postscript updateTotalVotes(Postscript postscript, int voteTotal, int vote) {
        Postscript findPostscript = findVerifiedPostscript(postscript.getPostscriptId());
        findPostscript.setTotalVotes(voteTotal);
        findPostscript.setVote(vote);
        return postscriptRepository.save(findPostscript);
    }

}