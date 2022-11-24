package com.yes27.study.entity;

import com.yes27.member.entity.Member;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Table
@Entity
@NoArgsConstructor
public class StudyVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studyVoteId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    private Study study;

    public StudyVote(Member member, Study study) {
        this.member = member;
        this.study = study;
    }
}
