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
        private String studyComment;
        private Long studyId;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyCommentId;

        @NotBlank
        private String studyComment;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyCommentId;

        private String studyComment;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

//        public StudySubset study;
//        public MemberSubset member;
    }
    
    @Getter 
    @Setter 
    @Builder
    public static class StudySubset {
        public Long studyId;
        public String studyTitle; 
        public String studyContent;
        
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;
    }

    @Getter
    @Setter
    @Builder
    public static class MemberSubset {
        public Long memberId;
        public String email;
        public String nickname;
    }
}
