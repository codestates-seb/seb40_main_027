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
    public PostscriptComment createPostComment(Long postscriptId, PostscriptComment postscriptComment) {
        Postscript postscript = verifyPostscript(postscriptId);
        return postscriptCommentRepository.save(postscriptComment);
    }

    //댓글 수정
    public PostscriptComment updatePostComment(PostscriptComment postscriptComment) {
        PostscriptComment findPostComment = findPostComment(postscriptComment.getPostscriptCommentId());
        findPostComment.setPostscriptComment(postscriptComment.getPostscriptComment());

        return postscriptCommentRepository.save(findPostComment);
    }

    // postscript 댓글 찾기
    public PostscriptComment findPostComment(long postscriptCommentId) {

        PostscriptComment findPostComment = findVerifiedPostscriptComment(postscriptCommentId);
        postscriptCommentRepository.save(findPostComment);

        return findPostComment;
    }

    // 댓글 존재 여부 검사
    public PostscriptComment findVerifiedPostscriptComment(long postscriptCommentId) {
        Optional<PostscriptComment> optionalPostscriptComment = postscriptCommentRepository.findById(postscriptCommentId);
        PostscriptComment findPostComment = optionalPostscriptComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findPostComment;
    }

    // 댓글 삭제
    public void deletePostComment(long postscriptCommentId, long memberId) {
        PostscriptComment postscriptComment = findVerifiedPostscriptComment(postscriptCommentId);

        long writerPostCommentId = findWritePostCommentId(postscriptCommentId);

        if (memberId != writerPostCommentId) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
        }

        postscriptCommentRepository.delete(postscriptComment);
    }

    // 댓글 작성자 Id 찾기
    public long findWritePostCommentId(long postscriptCommentId) {
        PostscriptComment postscriptComment = findVerifiedPostComment(postscriptCommentId);
        return postscriptComment.getMember().getMemberId();
    }
    // 댓글 작성자 Member 찾기
    public Member findPostscriptCommentWriter(long postscriptCommentId) {
        PostscriptComment findPostscriptComment = findVerifiedPostscriptComment(postscriptCommentId);
        return findPostscriptComment.getMember();
    }

    public PostscriptComment findVerifiedPostComment(long postscriptCommentId) {
        Optional<PostscriptComment> optionalPostComment = postscriptCommentRepository.findById(postscriptCommentId);
        PostscriptComment findPostComment = optionalPostComment.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.POSTSCRIPTCOMMENT_NOT_FOUND));

        return findPostComment;
    }

    //postscript게시판 존재 여부 확인 메서드
    private Postscript verifyPostscript(Long postscriptId) {
        return postscriptService.findVerifiedPostscript(postscriptId);
    }
}
