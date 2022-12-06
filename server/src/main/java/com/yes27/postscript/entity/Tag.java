package com.yes27.postscript.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.yes27.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String tagName;

    //유저 연관관계 추가
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "POSTSCRIPT_ID")
    private Postscript postscript;

}
