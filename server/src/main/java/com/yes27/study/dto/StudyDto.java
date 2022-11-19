package com.yes27.study.dto;

import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class StudyDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank
        private String studyTitle;
        @NotBlank
        private String studyContent;
        private Long memberId;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyId;

        private String studyTitle;
        private String studyContent;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyId;

        private String studyTitle;
        private String studyContent;

        private int view;
        private int vote;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public List<StudyCommentSubset> studyComments;
    }

    @Getter
    @Setter
    @Builder
    public static class StudyCommentSubset {
        public Long studyCommentId;
        public String comment;
        public int vote;
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;
    }
}


