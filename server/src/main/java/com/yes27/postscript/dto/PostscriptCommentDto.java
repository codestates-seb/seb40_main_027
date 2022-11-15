package com.yes27.postscript.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class PostscriptCommentDto {

    @Getter
    public static class Post {

        private long postCommentId;

        @NotBlank(message = "내용을 입력하세요.")
        private String postCommentContent;
    }


    @Getter
    @Setter
    public static class Patch {

        private Long postCommentId;

        @NotBlank(message = "내용을 입력하세요.")
        private String postCommentContent;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long postCommentId;
        private String postCommentContent;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        // UserDto 넣기
    }

}
