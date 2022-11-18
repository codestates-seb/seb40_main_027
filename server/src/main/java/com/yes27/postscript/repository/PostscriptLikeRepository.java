package com.yes27.postscript.repository;

import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostscriptLikeRepository extends JpaRepository<PostscriptLike, Long> {

//    //유저추가
//    PostscriptLike findByPostscriptAndUser(Postscript postscript);

    List<PostscriptLike> findAllByPostscript(long postscriptId);
    @Query("SELECT sum(qv.postLike) from PostscriptLike qv where qv.postscript.postscriptId = :postscriptId")
    int findLikeValue(@Param("postscriptId") long postscriptId);

}
