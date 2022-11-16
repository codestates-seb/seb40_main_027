package com.yes27.mentoringcomment.service;


import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.service.MentorService;
import com.yes27.mentoringcomment.entity.Comment;
import com.yes27.mentoringcomment.repository.CommentRespository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {

    private final CommentRespository commentRespository;

    private final MentorService mentorService;

    public CommentService(CommentRespository commentRespository, MentorService mentorService) {
        this.commentRespository = commentRespository;
        this.mentorService = mentorService;
    }

    public Comment create(Long mentorId, Comment comment){
        //mentor 게시판이 있는지 확인
       Mentor mentor =  verifyMentor(mentorId);
       comment.setMentor(mentor);
        return commentRespository.save(comment);
    }

    public Comment update(Long mentorId, Comment comment, Long commentId){
        verifyMentor(mentorId);
        Comment findComment = findVerifiedComment(commentId);
        findComment.setCommentContent(comment.getCommentContent());
//        findComment.setUpdatedAt(LocalDateTime.now());

        return commentRespository.save(findComment);
    }

    public Comment findComment(long commentId){
        return findVerifiedComment(commentId);
    }


    public void delete(long commentId){
        Comment findComment = findVerifiedComment(commentId);

        commentRespository.delete(findComment);
    }
    private Mentor verifyMentor(Long mentorId) {
        //멘토링 게시판이 존재하는지 확인
       return mentorService.findVerifiedMentor(mentorId);
    }

    private Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment = commentRespository.findById(commentId);
        Comment findComment = optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MENTOR_NOT_FOUND));
        return findComment;
    }
}