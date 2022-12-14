package com.yes27.mentoringcomment.entity;


import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Comment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mentoringCommentId;

    @Column(nullable = false, columnDefinition = "Text")
    private String mentoringComment;

    @ManyToOne
    @JoinColumn(name = "MENTOR_MENTORINGID")
    private Mentor mentor;

    @ManyToOne
    @JoinColumn(name = "MEBER_ID")
    private Member member;
}
