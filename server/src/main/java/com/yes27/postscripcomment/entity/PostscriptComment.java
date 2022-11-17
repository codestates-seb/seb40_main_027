package com.yes27.postscripcomment.entity;

import com.yes27.BaseEntity;
import com.yes27.postscript.entity.Postscript;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class PostscriptComment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postCommentId;

    @Column(nullable = false)
    private String postCommentContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postscript_id")
    private Postscript postscript;

    // 유저관계 매핑 추가하기
}
