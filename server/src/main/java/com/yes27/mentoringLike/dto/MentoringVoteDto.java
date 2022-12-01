package com.yes27.mentoringLike.dto;

import com.yes27.member.entity.Member;
import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.entity.Mentor;
import lombok.*;

public class MentoringVoteDto {

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private long mentoringId;
        private int totalVotes;
        private int vote;


    }
}
