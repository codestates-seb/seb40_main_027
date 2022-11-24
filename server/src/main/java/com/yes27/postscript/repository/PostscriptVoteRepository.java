package com.yes27.postscript.repository;

import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostscriptVoteRepository extends JpaRepository<PostscriptVote, Long> {

    //멤버 추가
    PostscriptVote findByPostscriptAndMember(Postscript postscript,Member member);

    List<PostscriptVote> findAllByPostscript(long postscriptId);

    @Query("SELECT sum(qv.vote) from PostscriptVote qv where qv.postscript.postscriptId = :postscriptId")
    int findVoteValue(@Param("postscriptId") long postscriptId);

}
