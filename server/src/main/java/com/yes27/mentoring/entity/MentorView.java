package com.yes27.mentoring.entity;


import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
public class MentorView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mentorViewId;

    @ManyToOne
    @JoinColumn(name = "MENTOR_MENTORINGID")
    private Mentor mentor;

    @ManyToOne
    @JoinColumn(name = "MEBER_ID")
    private Member member;


}
