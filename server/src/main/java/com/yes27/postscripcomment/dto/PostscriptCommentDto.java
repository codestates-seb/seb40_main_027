package com.yes27.postscripcomment.dto;

import com.yes27.member.dto.MemberDto;
import lombok.*;
import lombok.Builder;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class PostscriptCommentDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private Long postCommentId;

        @NotBlank(message = "댓글을 입력하세요.")
        private String postscriptComment;
        private Long memberId;
    }


    @Getter
    @Setter
    public static class Patch {

        private Long postCommentId;

//        @NotBlank(message = "댓글을 입력하세요.")
        private String postscriptComment;

    }


    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private Long postCommentId;
        private String postscriptComment;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String nickname;
        // UserDto 넣기
    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class postCommentResponse {

        private String postscriptComment;

    }

}
