package com.yes27.postscripcomment.repository;

import com.yes27.member.entity.Member;
import com.yes27.postscripcomment.entity.PostscriptComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostscriptCommentRepository extends JpaRepository<PostscriptComment, Long> {
}
