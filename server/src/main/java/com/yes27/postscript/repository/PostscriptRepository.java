package com.yes27.postscript.repository;

import com.yes27.postscript.entity.Postscript;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostscriptRepository extends JpaRepository<Postscript, Long> {

    Page<Postscript> findAllByPostscriptStatus(Pageable pageable, Postscript.PostscriptStatus postscriptStatus);
}
