package com.yes27.postscript.repository;

import com.yes27.postscript.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findAllByPostscript(@Param("postscriptId") long postscriptId);

    Optional<Tag> findByTagName(String tagName);

    //유저관계 추가

}
