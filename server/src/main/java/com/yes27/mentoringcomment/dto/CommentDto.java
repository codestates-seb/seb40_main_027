package com.yes27.mentoringcomment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    @Setter
    public static class Post{

        @NotBlank
        private String commentContent;
    }

    @Getter
    @Setter
    public static class Patch{

        @NotBlank
        private String commentContent;
    }

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response{
        private long commentId;
        private String commentContent;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long mentoringId;


    }
}
