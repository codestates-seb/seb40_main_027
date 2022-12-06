package com.yes27.mentoring.repository;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.entity.MentorView;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MentorViewRepository extends JpaRepository<MentorView, Long> {

    Optional<MentorView> findByMentorAndMember(Mentor mentor, Member member);
}
