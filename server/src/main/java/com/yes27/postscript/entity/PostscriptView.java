package com.yes27.postscript.entity;

import com.yes27.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
public class PostscriptView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscriptViewId;

    @ManyToOne
    @JoinColumn(name="POSTSCRIPT_POSTSCRIPT")
    private Postscript postscript;

    @ManyToOne
    @JoinColumn(name = "MEBER_ID")
    private Member member;

}
