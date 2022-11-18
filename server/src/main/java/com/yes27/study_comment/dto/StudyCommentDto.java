package com.yes27.study_comment.dto;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class StudyCommentDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank
        private String comment;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyCommentId;

        @NotBlank
        private String comment;
    }

    @Getter
    @Setter
    @Builder
    public static class Response {
        private Long studyCommentId;

        @NotBlank
        private String comment;

        private int vote;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private Study study;
        private Member member;
    }
}
