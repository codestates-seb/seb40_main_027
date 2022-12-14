package com.yes27.study.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.study_comment.entity.StudyComment;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Study extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studyId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String studyTitle;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String studyContent;

    @OneToMany(mappedBy = "study", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<StudyComment> studyComments = new ArrayList<>();

    public void addStudyComment(StudyComment studyComment) {
        this.studyComments.add(studyComment);
        if (studyComment.getStudy() != this) {
            studyComment.addStudy(this);
        }
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getStudies().contains(this)) {
            this.member.addStudy(this);
        }
    }

    // 태그, 조회수 및 추천수
    private String tagName;

    @OneToMany(mappedBy = "study", cascade = CascadeType.ALL)
    Set<StudyVote> votes = new HashSet<>();

    @OneToMany(mappedBy = "study", cascade = CascadeType.ALL)
    Set<StudyView> views = new HashSet<>();

    private int totalVotes = 0;
    private int view = 0;
}
