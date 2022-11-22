package com.yes27.study.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.yes27.postscript.entity.Postscript;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class StudyTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "STUDY_ID")
    private Study study;

    public void addStudy(Study study) {this.study = study; }
}
