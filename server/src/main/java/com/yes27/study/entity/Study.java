package com.yes27.study.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.yes27.BaseEntity;
import com.yes27.study_comment.entity.StudyComment;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
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
public class Study extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studyId;

    private String studyTitle;
    private String studyContent;
    private int view = 0;
    private int vote = 0;

    @JsonManagedReference
    @OneToMany(mappedBy = "study", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<StudyComment> studyComments = new ArrayList<>();

    public void addStudyComment(StudyComment studyComment) {
        this.studyComments.add(studyComment);
        if (studyComment.getStudy() != this) {
            studyComment.addStudy(this);
        }
    }
}
