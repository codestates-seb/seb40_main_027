package com.yes27.postscript.service;

import com.yes27.member.entity.Member;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscript.entity.Tag;
import com.yes27.postscript.repository.TagRepository;
import org.springframework.context.annotation.Lazy;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostscriptService {

    private final PostscriptRepository postscriptRepository;
    private final PostscriptVoteService postscriptVoteService;
    private final TagRepository tagRepository;


    public PostscriptService(PostscriptRepository postscriptRepository,
                             @Lazy PostscriptVoteService postscriptVoteService,
                             TagRepository tagRepository
    ) {
        this.postscriptRepository = postscriptRepository;
        this.postscriptVoteService = postscriptVoteService;
        this.tagRepository = tagRepository;
    }

    public Postscript createPostscript(Postscript postscript) {
        return postscriptRepository.save(postscript);
    }

    public Postscript findPostscript(long postscriptId) {
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        findPostscript.setView(findPostscript.getView() + 1); //조회수 1증가
        return findPostscript;
    }

    public void deletePostscript(long postscriptId, long memberId) { //삭제
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        long writerId = findPostscriptWriter(postscriptId);

        if(memberId != writerId){
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
        }
        postscriptRepository.delete(findPostscript);
    }


    public Page<Postscript> findPostscripts(int page, int size, String sort) {

        Page<Postscript> findAllPostscript = postscriptRepository.findAllByPostscriptStatus(
                PageRequest.of(page, size, Sort.by(sort).descending()),
                Postscript.PostscriptStatus.POSTSCRIPT_EXIST);

        return findAllPostscript;
    }

    //마이페이지에 이용
    public List<Postscript> findPostscripts(Member member) {
        return postscriptRepository.findAllByMemberAndPostscriptStatus(member, Postscript.PostscriptStatus.POSTSCRIPT_EXIST);
    }

    public Postscript updatePostscript(Postscript postscript) { // 수정
        Postscript findPostscript = findVerifiedPostscript(postscript.getPostscriptId());

        Optional.ofNullable(postscript.getPostscriptTitle())
                .ifPresent(findPostscript::setPostscriptTitle);

        Optional.ofNullable(postscript.getPostscriptContent())
                .ifPresent(findPostscript::setPostscriptContent);
        findPostscript.setUpdatedAt(LocalDateTime.now());

        List<Tag> tagList = postscript.getTags();
        Optional.ofNullable(tagList)
                .ifPresent(findPostscript::setTags);

        if (tagList != null) {
            for (Tag tag : tagList)
                tagRepository.save(tag);
        }

        Postscript updatedPostscript = postscriptRepository.save(findPostscript);
        return updatedPostscript;
    }
    // 좋아요 수 새로 갱신
    public void refreshVotes(long postscriptId) {
        Postscript postscript = findVerifiedPostscript(postscriptId);
        postscript.setVotes(postscriptVoteService.getVotes(postscriptId));
        postscriptRepository.save(postscript);
    }

    public long findPostscriptWriter(long postscriptId) { // 글 작성자인지 찾기 -> 수정 삭제
        Postscript postscript = findVerifiedPostscript(postscriptId);
        return postscript.getMember().getMemberId();
    }

    public Postscript findVerifiedPostscript(long postscriptId) { // 유효한 질문인지 확인
        Optional<Postscript> optionalPostscript = postscriptRepository.findById(postscriptId);
        Postscript findPostscript = optionalPostscript.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.POSTSCRIPT_NOT_FOUND));

        if (findPostscript.getPostscriptStatus() == Postscript.PostscriptStatus.POSTSCRIPT_NOT_EXIST) {
            throw new BusinessLogicException(ExceptionCode.POSTSCRIPT_NOT_FOUND);
        }
        return findPostscript;
    }
}