package com.yes27.postscript.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class PostscriptCommentDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private long postCommentId;

        @NotBlank(message = "내용을 입력하세요.")
        private String postCommentContent;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private long postCommentId;

        @NotBlank(message = "내용을 입력하세요.")
        private String postCommentContent;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long postCommentId;
        private String postCommentContent;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        // UserDto 넣기
    }

}
