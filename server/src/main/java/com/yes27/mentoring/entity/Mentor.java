package com.yes27.mentoring.entity;

import com.yes27.BaseEntity;
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

    @Column
    private int viewCount;

    @OneToMany(mappedBy = "mentor", cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();



}
