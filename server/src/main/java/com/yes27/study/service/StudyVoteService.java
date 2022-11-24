package com.yes27.study.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study.repository.StudyRepository;
import com.yes27.study.repository.StudyVoteRepository;
import java.util.Optional;
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
        Optional<Study> study = studyRepository.findByStudyId(studyId);
        if (study == null) {
            throw new BusinessLogicException(ExceptionCode.STUDY_NOT_FOUND);
        }
        if (isNotAlreadyVote(member, study)) {
            return true;
        }
        return false;
    }

    // 사용자가 이미 좋아요한 게시물인치 확인하는 메서드
    private boolean isNotAlreadyVote(Member member, Optional<Study> study) {
        return studyVoteRepository.findByMemberAndStudy(member, study).isEmpty();
    }
}


