package com.yes27.member.entity;

import com.yes27.study.entity.Study;
import com.yes27.study_comment.entity.StudyComment;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<StudyComment> studyComments = new ArrayList<>();

    public void addStudyComment(StudyComment studyComment) {
        this.studyComments.add(studyComment);
        if (studyComment.getMember() != this) {
            studyComment.addMember(this);
        }
    }
}
