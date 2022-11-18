package com.yes27.postscript.dto;

import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscript.entity.Postscript;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class PostscriptDto {
    @Getter
    public static class Post {  // 선택후기 등록

            @NotBlank(message = "선택 조언 및 후기의 제목을 적어주세요")
            private String postscriptTitle;

            @NotBlank(message = "선택 조언 및 후기의 내용을 적어주세요")
            private String postscriptContent;

            @NotBlank(message = "부트캠프 조언, 후기 중 골라주세요")
            private List<TagDto> tags;
        }

    @Getter
    @Setter
    public static class Patch{ // 선택후기 수정

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private List<TagDto> tags;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostscriptResponse{  // 선택후기 등록 response

        private Long postscriptId;
        private String postscriptTitle;
        private String postscriptContent;
        private Postscript.PostscriptStatus postscriptStatus;
        private Integer postLike;
        private Integer postscriptView;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private List<PostscriptCommentDto> postComments;
        private List<TagResponseDto> questionTags;
    }

}
