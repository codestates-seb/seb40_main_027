package com.yes27.postscript.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PostscriptService {

    private final PostscriptRepository postscriptRepository;

    public PostscriptService(PostscriptRepository postscriptRepository
//                             PostscriptLikeService postscriptLikeService
                            ) {
        this.postscriptRepository = postscriptRepository;
//        this.postscriptLikeService = postscriptLikeService;
    }

    public Postscript createPostscript(Postscript postscript) {
        return postscriptRepository.save(postscript);
    }

    public Postscript findPostscript(long postscriptId) {
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        findPostscript.setPostscriptView(findPostscript.getPostscriptView()+1); //조회수 1증가
        return findPostscript;
    }

    public void deletePostscript(long postscriptId){ //삭제
        Postscript findPostscript = findVerifiedPostscript(postscriptId);
        findPostscript.setPostscriptStatus(Postscript.PostscriptStatus.POSTSCRIPT_NOT_EXIST);
        postscriptRepository.save(findPostscript);
    }

    public Postscript updatePostscript(Postscript postscript) { // 수정
        Postscript findPostscript = findVerifiedPostscript(postscript.getPostscriptId());

        Optional.ofNullable(postscript.getPostscriptTitle())
                .ifPresent(findPostscript::setPostscriptTitle);

        Optional.ofNullable(postscript.getPostscriptContent())
                .ifPresent(findPostscript::setPostscriptContent);


        Postscript updatedPostscript = postscriptRepository.save(findPostscript);
        return updatedPostscript;
    }

    public Page<Postscript> findPostscripts(int page, int size, String sort) {

        Page<Postscript> findAllPostscript = postscriptRepository.findAllByPostscriptStatus(
                PageRequest.of(page, size, Sort.by(sort).descending()),
                Postscript.PostscriptStatus.POSTSCRIPT_EXIST);

        return findAllPostscript;
    }


    @Transactional(readOnly = true)
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