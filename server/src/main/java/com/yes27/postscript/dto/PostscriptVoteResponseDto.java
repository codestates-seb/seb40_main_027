package com.yes27.postscript.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostscriptVoteResponseDto {

    private long postscriptId;
    private long vote;
    private long totalVotes; //확정
}
