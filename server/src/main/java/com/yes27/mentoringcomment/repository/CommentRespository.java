package com.yes27.mentoringcomment.repository;

import com.yes27.mentoringcomment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRespository extends JpaRepository<Comment, Long> {
}
