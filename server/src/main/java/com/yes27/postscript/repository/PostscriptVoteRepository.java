package com.yes27.postscript.repository;

import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostscriptVoteRepository extends JpaRepository<PostscriptVote, Long> {

    //멤버 추가
    Optional<PostscriptVote> findByPostscriptAndMember(Postscript postscript, Member member);

    @Query("SELECT Count(*) from PostscriptVote v where v.postscript = :postscriptId and vote=1")
    int findTotalVoteValue(@Param("postscriptId") Postscript postscriptId);

}
