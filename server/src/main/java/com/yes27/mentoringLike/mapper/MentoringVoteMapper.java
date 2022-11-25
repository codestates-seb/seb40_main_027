package com.yes27.mentoringLike.mapper;


import com.yes27.mentoringLike.dto.MentoringVoteDto;
import com.yes27.mentoringLike.dto.MentoringVoteDto.Response;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.mentoringcomment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MentoringVoteMapper {

    Response  mentoringToVoteResponseDto(MentoringVote mentoringVote);

}
