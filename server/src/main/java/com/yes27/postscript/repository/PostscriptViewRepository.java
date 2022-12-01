package com.yes27.postscript.repository;

import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostscriptViewRepository extends JpaRepository<PostscriptView, Long> {

    Optional<PostscriptView> findByPostscriptAndMember(Postscript postscript, Member member);
}
