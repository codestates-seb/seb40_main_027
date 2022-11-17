package com.yes27.postscripcomment.mapper;


import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscripcomment.service.PostscriptCommentService;
import com.yes27.postscript.service.PostscriptService;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostscriptCommentMapper {

    //댓글 생성
    default PostscriptComment postCommentPostToPostComment(long postscriptId,
                                                           PostscriptService postscriptService,
                                                           PostscriptCommentDto.Post postscriptCommentPostDto) {

        PostscriptComment postscriptComment = new PostscriptComment();


        postscriptComment.setPostCommentContent(postscriptCommentPostDto.getPostCommentContent());
        postscriptComment.setPostscript(postscriptService.findVerifiedPostscript(postscriptId));

        return postscriptComment;
    }


    //댓글 수정
    default PostscriptComment postCommentPatchToPostComment(PostscriptCommentService postscriptCommentService,
                                                            PostscriptCommentDto.Patch postscriptCommentPatchDto) {

        PostscriptComment postscriptComment = new PostscriptComment();

        postscriptComment.setPostCommentContent(postscriptCommentPatchDto.getPostCommentContent());

        return postscriptComment;
    }

    default PostscriptCommentDto.Response postCommentToPostCommentResponseDto(PostscriptComment postscriptComment){

        PostscriptCommentDto.Response postCommentResponseDto = new PostscriptCommentDto.Response();

        postCommentResponseDto.setPostCommentId(postscriptComment.getPostCommentId());
        postCommentResponseDto.setPostCommentContent(postscriptComment.getPostCommentContent());
        postCommentResponseDto.setCreatedAt(postscriptComment.getCreatedAt());
        postCommentResponseDto.setModifiedAt(postscriptComment.getUpdatedAt());

        return postCommentResponseDto;
    }

}
