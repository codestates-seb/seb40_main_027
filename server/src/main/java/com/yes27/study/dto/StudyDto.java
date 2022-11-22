package com.yes27.study.dto;

import com.yes27.validator.NotSpace;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class StudyDto {
    @Getter
    @Setter
    public static class Post {
        private String studyTitle;
        private String studyContent;
        private Long memberId;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyId;

        @NotSpace
        private String studyTitle;
        @NotSpace
        private String studyContent;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyId;

        private String studyTitle;
        private String studyContent;

        private int vote;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public List<StudyCommentSubset> studyComments;
        public MemberSubset member;
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

    @Getter
    @Setter
    @Builder
    public static class MemberSubset {
        public Long memberId;
        public String email;
        public String nickname;
        public String password;
    }
}


