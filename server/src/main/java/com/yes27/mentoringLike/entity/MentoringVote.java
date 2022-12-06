package com.yes27.mentoringLike.entity;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class MentoringVote {

    //좋아요 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long metorVoteId;

    //좋아요
    @Column(nullable = false)
    private int vote;

    @Column(nullable = false)
    private int totalVotes;

    //좋아요 게시판 식별자
    @ManyToOne
    @JoinColumn(name = "MENTOR_MENTORINGID")
    private Mentor mentor;

    // 좋아요 유저 식별자자
   @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;



}
