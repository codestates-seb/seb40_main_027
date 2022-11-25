package com.yes27.mentoringcomment.mapper;


import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.mentoringcomment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment commentPostDtoToComment(CommentDto.Post commentPostDto);
    Comment commentPatchDtoToComment(CommentDto.Patch commentPatchDto);

    CommentDto.commmentResponse commentToCommentsResponseDto(Comment comment);

    default CommentDto.Response commentToCommentResponseDto(Comment comment){
        CommentDto.Response response = new CommentDto.Response(
                comment.getCommentId(),
                comment.getMentoringComment(),
                comment.getCreatedAt(),
                comment.getUpdatedAt()
//                comment.getMentor().getMentoringId()
        );
        return response;
    }
}
