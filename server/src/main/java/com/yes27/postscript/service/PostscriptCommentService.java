package com.yes27.postscript.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptComment;
import com.yes27.postscript.repository.PostscriptCommentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class PostscriptCommentService {

    private final PostscriptCommentRepository postscriptCommentRepository;
    private final PostscriptService postscriptService;

    public PostscriptCommentService (PostscriptCommentRepository postscriptCommentRepository,
                                     PostscriptService postscriptService){

        this.postscriptCommentRepository = postscriptCommentRepository;
        this.postscriptService = postscriptService;

    }

    // 댓글 생성
    public PostscriptComment createPostComment(PostscriptComment postscriptComment) {

        return postscriptCommentRepository.save(postscriptComment);
    }
    // 댓글 수정
    public PostscriptComment updatePostComment(PostscriptComment postscriptComment){

        PostscriptComment findPostComment = findVerifiedPostscriptComment(postscriptComment.getPostCommentId());
        Optional.ofNullable(postscriptComment.getPostCommentContent())
                .ifPresent(findPostComment::setPostCommentContent);

        return postscriptCommentRepository.save(postscriptComment);
    }

    public PostscriptComment findPostComment(long postCommentId){

        PostscriptComment findPostComment = findVerifiedPostscriptComment(postCommentId);
        postscriptCommentRepository.save(findPostComment);

        return findPostComment;
    }

    // 댓글 삭제
    public void deletePostComment(Long postCommentId) {
        PostscriptComment verifiedPostComment = findVerifiedPostscriptComment(postCommentId);
        postscriptCommentRepository.delete(verifiedPostComment);
    }

    public List<PostscriptComment> findPostCommentAll() {
        return new ArrayList<>(postscriptCommentRepository.findAll());
    }

    public PostscriptComment findVerifiedPostscriptComment(long postCommentId) {
        Optional<PostscriptComment> optionalComment = postscriptCommentRepository.findById(postCommentId);
        return optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
    }


}
