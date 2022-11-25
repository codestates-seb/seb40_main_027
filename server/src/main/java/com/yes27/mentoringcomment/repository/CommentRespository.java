package com.yes27.mentoringcomment.repository;

import com.yes27.member.entity.Member;
import com.yes27.mentoringcomment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRespository extends JpaRepository<Comment, Long> {


    Optional<Comment> findByCommentIdAndMember( Long commentId, Member member);


}
