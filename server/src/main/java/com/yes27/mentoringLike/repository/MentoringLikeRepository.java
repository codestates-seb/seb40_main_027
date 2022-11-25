package com.yes27.mentoringLike.repository;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.entity.MentoringVote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;

public interface MentoringLikeRepository extends JpaRepository<MentoringVote, Long> {
    Optional<MentoringVote> findByMentorAndMember(Mentor mentor, Member member);


    @Query("select COUNT(*) from MentoringVote v where v.mentor = :mentor and vote = 1" )
    int findTotalvotes(@Param("mentor") Mentor mentor);

    @Query("select max(totalVotes) from MentoringVote v where v.mentor = :mentor")
    int findMax(@Param("mentor") Mentor mentor);
}
