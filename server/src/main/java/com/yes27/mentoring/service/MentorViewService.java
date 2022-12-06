package com.yes27.mentoring.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.entity.MentorView;
import com.yes27.mentoring.repository.MentorViewRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MentorViewService {

    private final MentorViewRepository mentorViewRepository;

    public MentorViewService(MentorViewRepository mentorViewRepository) {
        this.mentorViewRepository = mentorViewRepository;
    }


    public int addView(Mentor mentor, Member member) {
        int findView = findVerifiedMemberMentor(mentor, member);
        //이미 조회한 게시판인 경우
        if(findView == 0){
            return 0;
        }
            MentorView mentorView = new MentorView();
            mentorView.setMentor(mentor);
            mentorView.setMember(member);
            mentorViewRepository.save(mentorView);
            return 1;
    }

    public int findVerifiedMemberMentor(Mentor mentor, Member member) {
        Optional<MentorView> optionalView = mentorViewRepository.findByMentorAndMember(mentor, member);
        if (optionalView.isPresent()) {
            return 0;
        } else {
            return 1;
        }

    }
}