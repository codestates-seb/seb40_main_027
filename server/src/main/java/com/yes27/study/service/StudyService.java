package com.yes27.study.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study.repository.StudyRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class StudyService {
    private final StudyRepository studyRepository;

    public StudyService(StudyRepository studyRepository) {
        this.studyRepository = studyRepository;
    }

    public Study createStudy(Member member, Study study) {
        study.setMember(member);
        member.addStudy(study);

        return studyRepository.save(study);
    }

    public Study updateStudy(Member member, StudyDto.Patch patchDto) {
        Study study = findVerifiedStudy(patchDto.getStudyId());
        if (member.getMemberId() != study.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.PERMISSION_ERROR);
        }

        Optional.ofNullable(patchDto.getStudyTitle()).ifPresent(title -> study.setStudyTitle(title));
        Optional.ofNullable(patchDto.getStudyContent()).ifPresent(content -> study.setStudyContent(content));
        Optional.ofNullable(patchDto.getTagName()).ifPresent(tagName -> study.setTagName(tagName));

        return studyRepository.save(study);
    }

    public Study findStudy(Long studyId) {

        return findVerifiedStudy(studyId);
    }

    public Page<Study> findStudies(int page, int size) {

        return studyRepository.findAll(PageRequest.of(page, size, Sort.by("studyId").descending()));
    }

    // 조회순 정렬
    public Page<Study> findStudiesByView(int page, int size) {
//        return studyRepository.findAll(PageRequest.of(page, size, Sort.by("view").descending()));
        return studyRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Order.desc("view"), Sort.Order.desc("studyId"))));
    }

    // 추천순 정렬
    public Page<Study> findStudiesByVote(int page, int size) {
//        return studyRepository.findAll(PageRequest.of(page, size, Sort.by("totalVotes").descending()));
        return studyRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Order.desc("totalVotes"), Sort.Order.desc("studyId"))));
    }

    public void deleteStudy(Member member, Long studyId) {
        Study findStudy = findVerifiedStudy(studyId);
        if (member.getMemberId() != studyId) {
            throw new BusinessLogicException(ExceptionCode.PERMISSION_ERROR);
        }

        studyRepository.delete(findStudy);
    }

    public Study findVerifiedStudy(Long studyId) {
        Optional<Study> optionalStudy = studyRepository.findById(studyId);
        Study findStudy = optionalStudy.orElseThrow(() -> new BusinessLogicException(ExceptionCode.STUDY_NOT_FOUND));

        return findStudy;
    }

    public List<Study> findStudiesPage(Member member){
        return studyRepository.findAllByMember(member);
    }
}
