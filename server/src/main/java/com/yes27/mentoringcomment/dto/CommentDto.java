package com.yes27.mentoringcomment.dto;

import com.yes27.member.entity.Member;
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
        private String mentoringComment;
    }

    @Getter
    @Setter
    public static class Patch{

        @NotBlank
        private String mentoringComment;
    }

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response{
        private long mentoringCommentId;
        private String mentoringComment;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String nickname;


    }

    @Setter
    @Getter
    @Builder
    @AllArgsConstructor
    public static class commmentResponse{
        private String mentoringComment;
    }
}
