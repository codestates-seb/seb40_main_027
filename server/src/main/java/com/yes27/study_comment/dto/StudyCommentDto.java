package com.yes27.study_comment.dto;

import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class StudyCommentDto {
    @Getter
    @Setter
    public static class Post {
        private String comment;
        private Long studyId;
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

        private String comment;

        private int vote;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public StudySubset study;
    }
    
    @Getter 
    @Setter 
    @Builder
    public static class StudySubset {
        public Long studyId;
        public String studyTitle; 
        public String studyContent; 
        public int view; 
        public int vote;
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;
    }
}
