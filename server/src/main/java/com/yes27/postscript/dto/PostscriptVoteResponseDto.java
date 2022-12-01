package com.yes27.postscript.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostscriptVoteResponseDto {

    private Long postscriptId;
    private long vote;
    private long totalVotes; //확정
}
