package com.yes27.mentoringLike.dto;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.entity.Mentor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class MentoringVoteDto {

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response{
        private long metorVoteId;
        private int totalVotes;
        private int vote;


    }
}
