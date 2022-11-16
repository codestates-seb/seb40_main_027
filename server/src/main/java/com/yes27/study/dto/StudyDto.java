package com.yes27.study.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

public class StudyDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank
        private String studyTitle;
        @NotBlank
        private String studyContent;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long studyId;

        @NotBlank
        private String studyTitle;
        @NotBlank
        private String studyContent;
    }

    @Getter
    @Setter
    public static class Response {
        private Long studyId;

        private String studyTitle;
        private String studyContent;

        private int view;
        private int vote;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
        private LocalDateTime createdAt;
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
        private LocalDateTime updatedAt;
    }
}
