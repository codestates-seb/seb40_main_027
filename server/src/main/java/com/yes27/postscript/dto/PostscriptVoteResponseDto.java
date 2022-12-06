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
    private long vote;  // 투표 했는지 여부 했으면1/안했으면
    private long totalVotes; //총 투표수
}
