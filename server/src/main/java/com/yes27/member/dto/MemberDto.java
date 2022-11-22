package com.yes27.member.dto;

import com.yes27.validator.NotSpace;
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
//    @Getter
//    public static class Get {
//        private Long memberId;
//    }

    @Getter
    @Setter
    public static class Post {
//        private Long memberId;

        @Email
        @NotBlank(message = "이메일은 공백이 아니어야합니다.")
        @Pattern(regexp = "^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@(?:\\w+\\.)+\\w+$", message = "이메일 형식을 따라야합니다.")
        private String email;

        @NotBlank(message = "닉네임은 공백이 아니어야 합니다.")
        @Pattern(regexp = "^[a-zA-Z]+[a-zA-Z0-9]{2,9}$", message = "닉네임은 영어 및 숫자로 구성할 수 있으며, 3-10자 입니다.")
        private String nickname;

        @NotBlank(message = "패스워드는 공백이 아니어야 합니다.")
        @Pattern(regexp = "^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\\\(\\\\)\\-_=+]).{4,20}$", message = "비밀번호는 영문, 숫자 및 특수문자 조합으로 최소 한가지씩 조합하여 4-20 자입니다.")
        private String password;
    }

    @Getter
    @Setter
    public static class Patch {
//        private Long memberId;

        @Email
        @NotSpace(message = "이메일은 space 값이 될 수 없습니다.")
        @Pattern(regexp = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$", message = "이메일 형식을 따라야합니다.")
        private String email;

        @NotSpace(message = "닉네임은 space 값이 될 수 없습니다.")
        @Pattern(regexp = "^[a-z]+[a-z0-9]{2,9}$", message = "닉네임은 영어 및 숫자로 구성할 수 있으며, 3-10자 입니다.")
        private String nickname;

        @NotSpace(message = "비밀번호는 space 값이 될 수 없습니다.")
        @Pattern(regexp = "^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\\\(\\\\)\\-_=+]).{4,20}$", message = "비밀번호는 영문, 숫자 및 특수문자 조합으로 최소 한가지씩 조합하여 4-20 자입니다.")
        private String password;
    }

    @Getter
    @Setter
    public static class PatchResponse {
        private Long memberId;
        private String email;
        private String nickname;
    }

    @Getter
    @Setter
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
//        private String password;

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
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;
    }

    @Getter
    @Setter
    @Builder
    public static class StudyCommentSubset {
        private Long studyCommentId;
        private String comment;
        private int vote;
        public LocalDateTime createdAt;
        public LocalDateTime updatedAt;
    }
}
