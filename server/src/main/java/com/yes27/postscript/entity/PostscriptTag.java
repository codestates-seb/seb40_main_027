package com.yes27.postscript.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

public class PostscriptTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscriptTagId;

    @Column(nullable = false)
    private String postscriptTagName;

//    @ManyToOne
//    @JoinColumn(name = "USER_ID")
//    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "POSTSCRIPT_ID")
    private Postscript Postscript;

    public void addPostscript(Postscript postscript) {
        this.Postscript = postscript;
    }
}
