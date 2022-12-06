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
        private String tagName;  // 태그
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyId;

        @NotSpace
        private String studyTitle;
        @NotSpace
        private String studyContent;

        private String tagName;  // 태그
    }

    @Getter
    @Setter
    public static class PostResponse {
        private Long studyId;
    }

    @Getter
    @Setter
    public static class PatchResponse {
        private Long studyId;
    }

    @Getter
    @Setter
    public static class PagingResponse {
        private Long studyId;

        private String studyTitle;
        private String studyContent;

        private int totalVotes;
        private int view;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private String tagName;  // 태그

        public MemberSubset member;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyId;

        private String studyTitle;
        private String studyContent;

        private int totalVotes;
        private int view;
        private int vote; // 추천 여부 필드 추가

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private String tagName;  // 태그

        public List<StudyCommentSubset> studyComments;
        public MemberSubset member;
    }

    @Getter
    @Setter
    @Builder
    public static class StudyCommentSubset {
        public Long studyCommentId;
        public String studyComment;
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;

        public String nickname;
//        public MemberSubset member;
    }

    @Getter
    @Setter
    @Builder
    public static class MemberSubset {
        public Long memberId;
        public String email;
        public String nickname;
    }

    @Getter
    @Setter
    public static class VoteResponse {
        public Long studyId;
        public int vote;
        public int totalVotes;
    }

    // Mypage Response
    @Getter
    @Setter
    public static class StudyMypageResponse {
        private Long studyId;
        private String studyTitle;
        private String studyContent;
        private int view;
        private int totalVotes;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String tagName;  // 태그

    }
}


