package com.yes27.member.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

public class MemberDto {
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
    }

}
