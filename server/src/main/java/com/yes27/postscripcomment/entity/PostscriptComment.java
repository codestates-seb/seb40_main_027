package com.yes27.postscripcomment.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class PostscriptComment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postscriptCommentId;

    @Column(nullable = false)
    private String postscriptComment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POSTSCRIPT_ID")
    private Postscript postscript;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
