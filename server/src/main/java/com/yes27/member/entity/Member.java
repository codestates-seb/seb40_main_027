package com.yes27.member.entity;

import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringcomment.entity.Comment;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.entity.StudyComment;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String nickname;

    private String password;

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Study> studies = new ArrayList<>();

    public void addStudy(Study study) {
        this.studies.add(study);
        if (study.getMember() != this) {
            study.addMember(this);
        }
    }

    @OneToMany(mappedBy = "member", cascade ={CascadeType.PERSIST, CascadeType.REMOVE} )
    private List<Mentor> mentors = new ArrayList<>();
    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<StudyComment> studyComments = new ArrayList<>();

    @OneToOne(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private MentoringVote mentoringVote;

    @OneToMany(mappedBy = "member", cascade ={CascadeType.PERSIST, CascadeType.REMOVE} )
    private List<Comment> mentoringComment = new ArrayList<>();

    public void addStudyComment(StudyComment studyComment) {
        this.studyComments.add(studyComment);
        if (studyComment.getMember() != this) {
            studyComment.addMember(this);
        }
    }

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
