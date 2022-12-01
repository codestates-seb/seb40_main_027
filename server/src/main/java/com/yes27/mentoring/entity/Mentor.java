package com.yes27.mentoring.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringcomment.entity.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Mentor extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mentoringId;

    @Column(nullable = false, columnDefinition = "Text")
    private String mentoringTitle;

    @Column(nullable = false, columnDefinition = "Text")
    private String mentoringContent;

    @Column(nullable = false)
    private String tagName;

    @Column(nullable = false)
    private int totalVotes;

    @Column(nullable = false)
    private int vote; // 좋아요 유무

    @Column
    private int view;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.REMOVE)
    private List<MentoringVote> mentoringVote;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.REMOVE)
    private List<MentorView> mentorViews;
//    @OneToMany(mappedBy = "mentor",  cascade = CascadeType.REMOVE)
//    private List<MentoringVote> mentoringVotes;



}
