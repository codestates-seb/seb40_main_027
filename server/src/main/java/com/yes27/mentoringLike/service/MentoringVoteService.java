package com.yes27.mentoringLike.service;


import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringLike.repository.MentoringLikeRepository;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class MentoringVoteService {

    private final MentoringLikeRepository mentoringLikeRepository;


    public MentoringVoteService(MentoringLikeRepository mentoringLikeRepository) {
        this.mentoringLikeRepository = mentoringLikeRepository;
    }

    public MentoringVote upVote(Mentor mentor, Member member, int vote){
        MentoringVote findvote = findVote(mentor,member);
        int voteresult = 0;
        // 좋아요
        if(vote == 1){
            findvote.setVote(1);
            voteresult = totalVotes(mentor) + 1;
        }
        // 취소
        else if(vote == 0){
            findvote.setVote(0);
            if(totalVotes(mentor) > 0) {
                voteresult = totalVotes(mentor) - 1;
            }
        }
        findvote.setTotalVotes(voteresult);
        findvote.setMentor(mentor);
        findvote.setMember(member);
        return mentoringLikeRepository.save(findvote);
    }

    public int totalVotes(Mentor mentor) {
        int totalvotes = mentoringLikeRepository.findTotalvotes(mentor);
        return totalvotes;
    }
    public MentoringVote findVote(Mentor mentor, Member member){
        //게시글, 유저 데이터가 존재하는지 검사
        Optional<MentoringVote> optionalVote = mentoringLikeRepository.findByMentorAndMember(mentor, member);

        MentoringVote findVote = optionalVote.orElseGet(()->new MentoringVote());

        return findVote;


    }


}
