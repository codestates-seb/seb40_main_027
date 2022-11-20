package com.yes27.postscripcomment.dto;

import lombok.*;
import lombok.Builder;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class PostscriptCommentDto {

    @Getter
    @Setter
    public static class Post {

        private Long postCommentId;

        @NotBlank(message = "댓글을 입력하세요.")
        private String postCommentContent;
    }


    @Getter
    @Setter
    public static class Patch {

        private Long postCommentId;

        @NotBlank(message = "댓글을 입력하세요.")
        private String postCommentContent;

    }


    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private Long postCommentId;
        private String postCommentContent;

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        // UserDto 넣기
    }

}
