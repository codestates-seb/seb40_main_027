package com.yes27.postscript.dto;

import com.yes27.member.dto.MemberDto;
import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.study.dto.StudyDto;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class PostscriptDto {
    @Getter
    @Setter
    public static class Post {  // 부트캠프 선택 후기 등록

            @NotBlank(message = "선택 조언 및 후기의 제목을 적어주세요")
            private String postscriptTitle;

            @NotBlank(message = "선택 조언 및 후기의 내용을 적어주세요")
            private String postscriptContent;

            @NotBlank(message = "부트캠프 조언, 후기 중 골라주세요")
            private String tagName;

            private Long memberId;
        }

    @Getter
    @Setter
    public static class Patch{ // 선택후기 수정

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private String tagName;
        private LocalDateTime updatedAt;
//        private Long memberId;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostscriptResponse {  // 선택후기 등록 전체 조회 response

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private Postscript.PostscriptStatus postscriptStatus;
        private Integer totalVotes; // 좋아요 -> 투표
        private Integer View;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
//        private List<PostscriptCommentDto.Response> postComments; // 댓글
        private String tagName; // 태그
        private MemberDto.Response2 member; //유저 추가
//        private MemberSubset member; //유저 추가
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostscriptResponse2 {  // 선택후기 등록 조회 response

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private Postscript.PostscriptStatus postscriptStatus;
        private Integer vote; // 좋아요 -> 투표
        private Integer View;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private List<PostscriptCommentDto.Response> postscriptComments; // 댓글
        private String tagName; // 태그
        private MemberDto.Response2 member; //유저 추가

    }
    @Getter
    @Setter
    public static class PostscriptPostResponse {  // 선택후기 등록 post response

        private Long postscriptId;

    }

    @Getter
    @Setter
    public static class PostscriptMypageResponse {  // 마이페이지 표시 내용

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private Integer View;
        private Integer totalVotes; // 좋아요 -> 투표
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String tagName; // 태그
    }
}
