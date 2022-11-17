package com.yes27.postscript.repository;

import com.yes27.postscripcomment.entity.PostscriptComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostscriptCommentRepository extends JpaRepository<PostscriptComment, Long> {
}
