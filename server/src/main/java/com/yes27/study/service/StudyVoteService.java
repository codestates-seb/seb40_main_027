package com.yes27.study.service;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study.entity.StudyVote;
import com.yes27.study.repository.StudyRepository;
import com.yes27.study.repository.StudyVoteRepository;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
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
//    public boolean addVote(Member member, Long studyId) {
//        Study study = studyRepository.findById(studyId).orElseThrow();
//
//        if (isNotAlreadyVote(member, study)) {
//            studyVoteRepository.save(new StudyVote(study, member));
//            return true;
//        }
//        return false;
//    }

    public void addVote(Member member, Long studyId) {
        Study study = studyRepository.findById(studyId).orElseThrow();

        if (isNotAlreadyVote(member, study)) {
            studyVoteRepository.save(new StudyVote(study, member));
        }
    }

    public void cancelVote(Member member, Long studyId) {
        Study study = studyRepository.findById(studyId).orElseThrow();
        StudyVote studyVote = studyVoteRepository.findByMemberAndStudy(member, study).orElseThrow();
        studyVoteRepository.delete(studyVote);
    }

    public Integer count(Long studyId, Member member) {
        Study study = studyRepository.findById(studyId).orElseThrow();

        Integer totalVotes = studyVoteRepository.countByStudy(study).orElse(0);
//        List<String> resultData = new ArrayList<>(Arrays.asList(String.valueOf(totalVotes)));
//
//        if (Objects.nonNull(member)) {
//            resultData.add(String.valueOf(isNotAlreadyVote(member, study)));
//            return resultData;
//        }

        return totalVotes;
    }

    // 사용자가 이미 좋아요한 게시물인치 확인하는 메서드
        private boolean isNotAlreadyVote(Member member, Study study) {
            return studyVoteRepository.findByMemberAndStudy(member, study).isEmpty();
        }
}


