package com.yes27.mentoring.dto;

import com.yes27.mentoringcomment.dto.CommentDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class MentorDto {

    @Getter
    @Setter
    public static class Post{

        @NotBlank
        private String mentoringTitle;

        @NotBlank
        private String mentoringContent;
    }

    @Getter
    @Setter
    public static class Patch{
        @NotBlank
        private String mentoringTitle;

        @NotBlank
        private String mentoringContent;
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class Response{

        private Long mentoringId;
        private String mentoringTitle;
        private String mentoringContent;
        private int viewCount;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class MentorsResponse{

        private Long mentoringId;
        private String mentoringTitle;
        private String mentoringContent;
        private int viewCount;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private List<CommentDto.Response> comments;
    }
}
