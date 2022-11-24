package com.yes27.postscript.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostscriptVoteResponseDto {

    private long postscriptId;
    private long vote;
    private long totalVotes;
}
