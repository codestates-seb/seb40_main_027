package com.yes27.study.service;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study.entity.StudyView;
import com.yes27.study.repository.StudyRepository;
import com.yes27.study.repository.StudyViewRepository;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Transactional
@RequiredArgsConstructor
@Service
public class StudyViewService {
    private final StudyViewRepository studyViewRepository;
    private final StudyRepository studyRepository;

    public boolean addView(Member member, Long studyId) {
        Study study = studyRepository.findByStudyId(studyId).orElseThrow();
        if (isNotAleadyView(member, study)) {
            studyViewRepository.save(new StudyView(study, member));
            return true;
        }
        return false;
    }

    private boolean isNotAleadyView(Member member, Study study) {
        return studyViewRepository.findByMemberAndStudy(member, study).isEmpty();
    }
}
