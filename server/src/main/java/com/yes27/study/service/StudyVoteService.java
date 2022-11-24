package com.yes27.study.service;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study.entity.StudyVote;
import com.yes27.study.repository.StudyRepository;
import com.yes27.study.repository.StudyVoteRepository;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Transactional
@RequiredArgsConstructor
@Service
public class StudyVoteService {
    private final StudyVoteRepository studyVoteRepository;
    private final StudyRepository studyRepository;

    // 중복 좋아요 방지
    public boolean addVote(Member member, Long studyId) {
        Study study = studyRepository.findById(studyId).orElseThrow();

        if (isNotAlreadyVote(member, study)) {
            studyVoteRepository.save(new StudyVote(study, member));
            return true;
        }
        return false;
    }

    // 사용자가 이미 좋아요한 게시물인치 확인하는 메서드
        private boolean isNotAlreadyVote(Member member, Study study) {
            return studyVoteRepository.findByMemberAndStudy(member, study).isEmpty();
        }
}


