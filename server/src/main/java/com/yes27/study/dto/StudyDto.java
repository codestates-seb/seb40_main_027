package com.yes27.study.dto;

import com.yes27.member.entity.Member;
import com.yes27.study_comment.dto.StudyCommentDto;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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

        private String studyTitle;
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

        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        private List<StudyCommentDto.Response> studyComments = new ArrayList<>();
        private Member member;
    }
}


