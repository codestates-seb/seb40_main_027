package com.yes27.postscript.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PostscriptLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscript_id;

    @Column
    private int PostscriptLike = 0;
}
