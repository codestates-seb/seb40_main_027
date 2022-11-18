package com.yes27.study_comment.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
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
    public static class Response {
        private Long studyCommentId;

        @NotBlank
        private String comment;

        private int vote;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private Long studyId;
        private Long memberId;
    }
}
