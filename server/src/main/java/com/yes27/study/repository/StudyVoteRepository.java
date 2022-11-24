package com.yes27.study.repository;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.StudyVote;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyVoteRepository extends JpaRepository<StudyVote, Long> {
    Optional<StudyVote> findByVoteAndMember(Member member, StudyVote studyVote);
}
