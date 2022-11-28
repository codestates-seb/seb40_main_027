package com.yes27.bootcamp.repository;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.entity.Mybootcamp;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MybootcampRepository extends JpaRepository<Mybootcamp, Long> {
    Optional<Mybootcamp> findByBootCampAndMember(BootCamp bootCamp, Member member);

    List<Mybootcamp> findAllByMember(Member member);


}

