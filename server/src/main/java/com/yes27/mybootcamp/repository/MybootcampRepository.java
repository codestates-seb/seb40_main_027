package com.yes27.mybootcamp.repository;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;
import com.yes27.mybootcamp.entity.Mybootcamp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MybootcampRepository extends JpaRepository<Mybootcamp, Long> {
    Optional<Mybootcamp> findByBootCampAndMember(BootCamp bootCamp, Member member);
    List<Mybootcamp> findAllByMemberAndVote(Member member, int vote,Sort sort);

}
