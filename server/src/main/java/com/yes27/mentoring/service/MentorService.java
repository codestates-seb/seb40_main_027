package com.yes27.mentoring.service;


import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoring.repository.MentorRepository;
import com.yes27.mentoringLike.repository.MentoringLikeRepository;
import com.yes27.mentoringLike.service.MentoringVoteService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorService {
    private final MentorRepository mentorRepository;

    public MentorService(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }



    public Mentor create(Mentor mentor, Member member){
        mentor.setMentoringId(mentor.getMentoringId());
        mentor.setViewCount(0);
        mentor.setMember(member);

        return mentorRepository.save(mentor);
    }



    public Mentor update(Long mentoringId, Mentor mentor, Member member){
        Mentor findMentor = findVerifiedMentorMember(mentoringId, member);
        Optional.ofNullable(mentor.getMentoringTitle())
                .ifPresent(title -> findMentor.setMentoringTitle(title));
        Optional.ofNullable(mentor.getMentoringContent())
                .ifPresent(content -> findMentor.setMentoringContent(content));
        Optional.ofNullable(mentor.getTagName())
                .ifPresent(tag -> findMentor.setTagName(tag));
        return mentorRepository.save(findMentor);

    }

    public Mentor comletionTag(Long mentoringId, Member member){
        Mentor findMentor = findVerifiedMentorMember(mentoringId, member);
        findMentor.setTagName("모집 완료");
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
        return mentorRepository.findAll(PageRequest.of(page,size, Sort.by(sort).descending()));

    }

    public Mentor findMentor(Long mentoringId){
        Mentor findMentor = findVerifiedMentor((mentoringId));
        findMentor.setViewCount(findMentor.getViewCount() + 1);
//        findMentor.setTotalVotes(findTotle(findMentor));
        return mentorRepository.save(findMentor);
    }

    //좋아요 수
//    private int findTotle(Mentor mentor) {
//        int totalvotes = mentoringLikeRepository.findMax(mentor);
//        return totalvotes;
//    }

    //좋아요 수, 좋아요 유무
    public Mentor updateTotal(Mentor mentor,int votetotal, int like){
        Mentor findMentor = findVerifiedMentor(mentor.getMentoringId());
        findMentor.setTotalVotes(votetotal);
        findMentor.setVote(like);
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
