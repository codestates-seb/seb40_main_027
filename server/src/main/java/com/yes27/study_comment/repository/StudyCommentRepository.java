package com.yes27.study_comment.repository;

import com.yes27.study_comment.entity.StudyComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyCommentRepository extends JpaRepository<StudyComment, Long> {

}
