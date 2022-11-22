package com.yes27.study.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.study.entity.Study;
import com.yes27.study.repository.StudyRepository;
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

    public Study createStudy(Study study) {
        return studyRepository.save(study);
    }

    public Study updateStudy(Study study) {
        Study findStudy = findVerifiedStudy(study.getStudyId());

        Optional.ofNullable(study.getStudyTitle())
            .ifPresent(title -> findStudy.setStudyTitle(title));
        Optional.ofNullable(study.getStudyContent())
            .ifPresent(content -> findStudy.setStudyContent(content));

        return studyRepository.save(findStudy);
    }

    public Study findStudy(Long studyId) {
        return findVerifiedStudy(studyId);
    }

    public Page<Study> findStudies(int page, int size) {
        return studyRepository.findAll(PageRequest.of(page, size,
            Sort.by("studyId").descending()));
    }

    public void deleteStudy(Long studyId) {
        Study findStudy = findVerifiedStudy(studyId);
        studyRepository.delete(findStudy);
    }

    public Study findVerifiedStudy(Long studyId) {
        Optional<Study> optionalStudy = studyRepository.findById(studyId);
        Study findStudy =
            optionalStudy.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.STUDY_NOT_FOUND));
        return findStudy;
    }
}
