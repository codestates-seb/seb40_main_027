package com.yes27.postscript.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostscriptLikeDto {

    private long postscriptId;
    private long postLike;
    private long totalPostscriptLike;
}
