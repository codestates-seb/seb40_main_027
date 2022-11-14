package com.yes27.mentoring.service;


import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.repository.MentorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorService {
    private final MentorRepository mentorRepository;


    public MentorService(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    public Mentor create(Mentor mentor){
        mentor.setMentoringId(mentor.getMentoringId());
        mentor.setViewCount(0);


        return mentorRepository.save(mentor);
    }


    public Mentor update(Long mentoringId, Mentor mentor){
        Mentor findMentor = findVerifiedMentor(mentoringId);
        findMentor.setMentoringTitle(mentor.getMentoringTitle());
        findMentor.setMentoringContent(mentor.getMentoringContent());
//        findMentor.setUpdatedAt(LocalDateTime.now());
        return mentorRepository.save(findMentor);

    }

    public Page<Mentor> findMentors(int page, int size){
        return mentorRepository.findAll(PageRequest.of(page,size, Sort.by("mentoringId").descending()));
    }

    public Mentor findMentor(Long mentoringId){
        Mentor findMentor = findVerifiedMentor((mentoringId));
        findMentor.setViewCount(findMentor.getViewCount() + 1);
        return mentorRepository.save(findMentor);
    }

    public Mentor findVerifiedMentor(Long mentoringId) {
        Optional<Mentor> optionalMentor = mentorRepository.findById(mentoringId);
        if(optionalMentor.isPresent()){
            return optionalMentor.get();
        }else {
            throw new BusinessLogicException(ExceptionCode.MENTOR_NOT_FOUND);
        }
    }

    public void delete(Long mentoringId){
        Mentor mentor = findVerifiedMentor(mentoringId);
        mentorRepository.delete(mentor);
    }


}
