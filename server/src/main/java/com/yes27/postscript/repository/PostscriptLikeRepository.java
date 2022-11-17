package com.yes27.postscript.repository;

import com.yes27.postscript.entity.PostscriptLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostscriptLikeRepository extends JpaRepository<PostscriptLike, Long> {

    //유저추가

    List<PostscriptLike> findAllByPostscript(long postscriptId);

    int findLikeValue(@Param("postscriptId") long postscriptId);

}
