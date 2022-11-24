package com.yes27.study_comment.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StudyComment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studyCommentId;

    @NotBlank
    private String comment;

    @ManyToOne
    @JoinColumn(name = "STUDY_ID")
    private Study study;

    public void addStudy(Study study) {
        this.study = study;
        if (!this.study.getStudyComments().contains(this)) {
            this.study.addStudyComment(this);
        }
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getStudyComments().contains(this)) {
            this.member.addStudyComment(this);
        }
    }

    @ManyToMany
    private Set<Member> voteCommentMembers = new HashSet<>();
    public void addVoteMember(Member member) {
        voteCommentMembers.add(member);
    }
}
