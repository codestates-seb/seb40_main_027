package com.yes27.mentoring.service;


import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.repository.MentorRepository;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringLike.repository.MentoringLikeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MentorService {
    private final MentorRepository mentorRepository;

    private final MentorViewService mentorviewService;

    private final MentoringLikeRepository mentoringLikeRepository;

    public MentorService(MentorRepository mentorRepository, MentorViewService mentorviewService, MentoringLikeRepository mentoringLikeRepository) {
        this.mentorRepository = mentorRepository;
        this.mentorviewService = mentorviewService;
        this.mentoringLikeRepository = mentoringLikeRepository;
    }



    public Mentor create(Mentor mentor, Member member){
        mentor.setMentoringId(mentor.getMentoringId());
        mentor.setView(0);
        mentor.setMember(member);

        return mentorRepository.save(mentor);
    }



    public Mentor update(Mentor mentor, Member member){
        Mentor findMentor = findVerifiedMentorMember(mentor.getMentoringId(), member);
        Optional.ofNullable(mentor.getMentoringTitle())
                .ifPresent(title -> findMentor.setMentoringTitle(title));
        Optional.ofNullable(mentor.getMentoringContent())
                .ifPresent(content -> findMentor.setMentoringContent(content));
        Optional.ofNullable(mentor.getTagName())
                .ifPresent(tagName -> findMentor.setTagName(tagName));
        return mentorRepository.save(findMentor);

    }

    public Mentor findVerifiedMentorMember(Long mentoringId, Member member) {
        Optional<Mentor> optionalMentor = mentorRepository.findByMentoringIdAndMember(mentoringId, member);
        if(optionalMentor.isPresent()){
            return optionalMentor.get();
        }else {
            throw new BusinessLogicException(ExceptionCode.MENTOR_NOT_FOUND);
        }

    }

    public Page<Mentor> findMentors(int page, int size){
        return mentorRepository.findAll(PageRequest.of(page,size, Sort.by("mentoringId").descending()));

    }

    public Page<Mentor> findMentors(int page, int size, String sort){
        return mentorRepository.findAll(PageRequest.of(page,size, Sort.by(Sort.Order.desc(sort), Sort.Order.desc("mentoringId"))));

    }
    //로그인 하지 않은 경우 상세조회
    public Mentor findMentor(Long mentoringId){
        return findVerifiedMentor((mentoringId));
    }

    //좋아요 수
    public Mentor updateTotal(Mentor mentor,int votetotal) {
        Mentor findMentor = findVerifiedMentor(mentor.getMentoringId());
        findMentor.setTotalVotes(votetotal);
        return mentorRepository.save(findMentor);
    }

    //로그인 한 경우
    public Mentor isVote(Long mentoringId, Member member){
        Mentor findMentor = findVerifiedMentor(mentoringId);
        findMentor.setView(findMentor.getView() + mentorviewService.addView(findMentor, member));
        Optional<MentoringVote> findVote = mentoringLikeRepository.findByMentorAndMember(findMentor,member);
        if(findVote.isPresent()){
            findMentor.setVote(findVote.get().getVote());
        }else{
            findMentor.setVote(0);
        }
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



    public void delete(Long mentoringId, Member member){
        Mentor mentor = findVerifiedMentorMember(mentoringId, member);
        mentorRepository.delete(mentor);
    }

    //마이페이지에 이용
    public List<Mentor> findMentorsPage(Member member){
        return mentorRepository.findAllByMember(member);
    }


}
