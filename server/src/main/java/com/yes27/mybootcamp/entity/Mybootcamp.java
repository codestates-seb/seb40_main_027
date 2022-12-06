package com.yes27.mybootcamp.entity;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;

import javax.persistence.*;

@Entity
public class Mybootcamp {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long mybootcampId;
    private int vote;
    @ManyToOne
    @JoinColumn(
            name = "MEMBER_ID"
    )
    private Member member;
    @ManyToOne
    @JoinColumn(
            name = "BOOTCAMP_BOOTCAMPID"
    )
    private BootCamp bootCamp;

    public Mybootcamp() {
    }

    public Long getMybootcampId() {
        return this.mybootcampId;
    }

    public int getVote() {
        return this.vote;
    }

    public Member getMember() {
        return this.member;
    }

    public BootCamp getBootCamp() {
        return this.bootCamp;
    }

    public void setMybootcampId(Long mybootcampId) {
        this.mybootcampId = mybootcampId;
    }

    public void setVote(int vote) {
        this.vote = vote;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public void setBootCamp(BootCamp bootCamp) {
        this.bootCamp = bootCamp;
    }
}

