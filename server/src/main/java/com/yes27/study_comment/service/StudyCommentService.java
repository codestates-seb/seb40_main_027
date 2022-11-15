package com.yes27.study_comment.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.study_comment.entity.StudyComment;
import com.yes27.study_comment.repository.StudyCommentRepository;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class StudyCommentService {
    private final StudyCommentRepository studyCommentRepository;

    public StudyCommentService(StudyCommentRepository studyCommentRepository) {
        this.studyCommentRepository = studyCommentRepository;
    }

    public StudyComment createComment(StudyComment studyComment) {
        return studyCommentRepository.save(studyComment);
    }

    public StudyComment updateComment(StudyComment studyComment) {
        StudyComment findStudyComment = findVerifiedComment(studyComment.getStudyCommentId());

        Optional.ofNullable(studyComment.getComment())
            .ifPresent(comment -> findStudyComment.setComment(comment));

        return studyCommentRepository.save(findStudyComment);
    }

    public StudyComment findComment(Long studyCommentId) {
        return findVerifiedComment(studyCommentId);
    }

    public void deleteComment(Long studyCommentId) {
        StudyComment findStudyComment = findVerifiedComment(studyCommentId);
        studyCommentRepository.delete(findStudyComment);
    }

    public StudyComment findVerifiedComment(Long studyCommentId) {
        Optional<StudyComment> optionalStudyComment = studyCommentRepository.findById(studyCommentId);
        StudyComment findStudyComment =
            optionalStudyComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return findStudyComment;
    }
}
