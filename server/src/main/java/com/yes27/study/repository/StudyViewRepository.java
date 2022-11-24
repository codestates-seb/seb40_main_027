package com.yes27.study.repository;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study.entity.StudyView;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyViewRepository extends JpaRepository<StudyView, Long> {
    Optional<StudyView> findByMemberAndStudy(Member member, Study study);
}
