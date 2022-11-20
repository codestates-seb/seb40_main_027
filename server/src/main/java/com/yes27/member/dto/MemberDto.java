package com.yes27.member.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class MemberDto {
    @Getter
    public static class Get {
        private Long memberId;
    }

    @Getter
    @Setter
    public static class Post {
        private Long memberId;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String nickname;

        @NotBlank
        private String password;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long memberId;

        @Email
        @Pattern(regexp = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$",
            message = "이메일 형식을 따라야합니다.")
        private String email;
        private String nickname;
        private String password;
    }

    @Getter
    @Setter
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
        private String password;

        private List<StudySubset> studies = new ArrayList<>();
        private List<StudyCommentSubset> studyComments = new ArrayList<>();
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
    }

    @Getter
    @Setter
    @Builder
    public static class StudyCommentSubset {
        private Long studyCommentId;
        private String comment;
        private int vote;
    }

}
