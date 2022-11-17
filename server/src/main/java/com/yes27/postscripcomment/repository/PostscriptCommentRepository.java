package com.yes27.postscripcomment.repository;

import com.yes27.postscripcomment.entity.PostscriptComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostscriptCommentRepository extends JpaRepository<PostscriptComment, Long> {
}
