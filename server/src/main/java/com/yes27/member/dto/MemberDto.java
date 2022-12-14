package com.yes27.member.dto;

import com.yes27.mentoring.dto.MentorDto;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.study.dto.StudyDto;
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
    @Getter
    @Setter
    public static class Post {
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
//        @Email
//        @NotSpace(message = "이메일은 space 값이 될 수 없습니다.")
//        @Pattern(regexp = "^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@(?:\\w+\\.)+\\w+$", message = "이메일 형식을 따라야합니다.")
//        private String email;

        @NotSpace(message = "닉네임은 space 값이 될 수 없습니다.")
        @Pattern(regexp = "^[a-zA-Z]+[a-zA-Z0-9]{2,9}$", message = "닉네임은 영어 및 숫자로 구성할 수 있으며, 3-10자 입니다.")
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

        private List<StudySubset> studies = new ArrayList<>();
        private List<StudyCommentSubset> studyComments = new ArrayList<>();
    }

    @Getter
    @Setter
    public static class Response2{
        private Long memberId;
        private String email;
        private String nickname;
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

    @Getter
    @Setter
    public static class LoginResponse {
        private String nickname;
    }

    @Setter
    @Getter
    public static class MemberDataDetailDto{
        private Long memberId;
        private String email;
        private String nickname;

        private List<PostscriptDto.PostscriptMypageResponse> postscript;
        private List<MentorDto.MentorMypageResponse> mentor;
        private List<StudyDto.StudyMypageResponse> studies;
    }
}
