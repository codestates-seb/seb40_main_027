package com.yes27.mentoringcomment.mapper;

import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.mentoringcomment.entity.Comment;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T19:09:33+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment commentPostDtoToComment(CommentDto.Post commentPostDto) {
        if ( commentPostDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setMentoringComment( commentPostDto.getMentoringComment() );

        return comment;
    }

    @Override
    public Comment commentPatchDtoToComment(CommentDto.Patch commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setMentoringComment( commentPatchDto.getMentoringComment() );

        return comment;
    }

    @Override
    public CommentDto.commmentResponse commentToCommentsResponseDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentDto.commmentResponse.commmentResponseBuilder commmentResponse = CommentDto.commmentResponse.builder();

        commmentResponse.mentoringComment( comment.getMentoringComment() );

        return commmentResponse.build();
    }
}
