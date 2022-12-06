package com.yes27.mentoring.repository;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.entity.MentoringVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

    Optional<Mentor> findByMentoringIdAndMember(Long mentoringId, Member member);

    List<Mentor> findAllByMember(Member member);
}
