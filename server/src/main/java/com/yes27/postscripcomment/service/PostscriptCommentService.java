package com.yes27.postscripcomment.service;

import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import org.springframework.context.annotation.Lazy;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscripcomment.repository.PostscriptCommentRepository;
import com.yes27.postscript.service.PostscriptService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostscriptCommentService {

    private final PostscriptCommentRepository postscriptCommentRepository;
    private final PostscriptService postscriptService;

    public PostscriptCommentService(PostscriptCommentRepository postscriptCommentRepository,
                                    @Lazy PostscriptService postscriptService) {

        this.postscriptCommentRepository = postscriptCommentRepository;
        this.postscriptService = postscriptService;

    }

    // 댓글 생성
    public PostscriptComment createPostComment(PostscriptComment postscriptComment) {

        return postscriptCommentRepository.save(postscriptComment);
    }

    // 댓글 수정
    public PostscriptComment updatePostComment(PostscriptComment postscriptComment) {

        PostscriptComment findPostComment = findVerifiedPostscriptComment(postscriptComment.getPostCommentId());
        Optional.ofNullable(postscriptComment.getPostscriptComment())
                .ifPresent(findPostComment::setPostscriptComment);
        findPostComment.setUpdatedAt(LocalDateTime.now());

        return postscriptCommentRepository.save(postscriptComment);
    }

    public PostscriptComment findPostComment(long postCommentId) {

        PostscriptComment findPostComment = findVerifiedPostscriptComment(postCommentId);
//        postscriptCommentRepository.save(findPostComment);

        return findPostComment;
    }
    public PostscriptComment findVerifiedPostscriptComment(long postCommentId) {
        Optional<PostscriptComment> optionalPostscriptComment = postscriptCommentRepository.findById(postCommentId);
        PostscriptComment findPostComment = optionalPostscriptComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findPostComment;
    }
    // 댓글 삭제
    public void deletePostComment(long postCommentId) {
        PostscriptComment postscriptComment = findVerifiedPostscriptComment(postCommentId);
        postscriptCommentRepository.delete(postscriptComment);
    }

    public List<PostscriptComment> findPostCommentAll() {
        return new ArrayList<>(postscriptCommentRepository.findAll());
    }
    public Member findPostscriptCommentWriter(long postCommentId) {
        PostscriptComment findPostscriptComment = findVerifiedPostscriptComment(postCommentId);
        return findPostscriptComment.getMember();
    }
}
