package com.yes27.mentoring.dto;

import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.study.dto.StudyDto;
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

        @NotBlank
        private String tagName;
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
        private int totalVotes;
        private String tagName;
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class MentoringResponse{

        private Long mentoringId;
    }


    //상세 조회
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
        private String tagName;
        private int totalVotes;
        private int vote;
        private List<CommentDto.Response> comments;


    }

    //Mypage Response
    @Getter
    @Setter
    public static class MentorMypageResponse{
        private Long mentoringId;
        private String mentoringTitle;
        private String mentoringContent;
        private int view;
        private int totalVotes;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String tagName;

    }
    private List<PostscriptDto.PostscriptMypageResponse> postscript;
    private List<MentorDto.MentorMypageResponse> mentor;
    private List<StudyDto.StudyMypageResponse> studies;

}
