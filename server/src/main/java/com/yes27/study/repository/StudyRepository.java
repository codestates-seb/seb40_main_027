package com.yes27.study.repository;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.study.entity.Study;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyRepository extends JpaRepository<Study, Long> {
    Optional<Study> findByStudyId(Long studyId);

    List<Study> findAllByMember(Member member);
}
