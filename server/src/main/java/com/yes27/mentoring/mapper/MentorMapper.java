package com.yes27.mentoring.mapper;


import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringcomment.Comment;
import com.yes27.mentoringcomment.CommentDto;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MentorMapper {

    Mentor mentorPostDtoToMentor(MentorDto.Post mentorPostDto);
    Mentor mentorPatchDtoToMentor(MentorDto.Patch mentorPatchDto);
    MentorDto.Response mentorToMentorResponseDto(Mentor mentor);

    List<MentorDto.Response> mentorsToMentorResponseDtos(List<Mentor> mentors);

    //게시판에 대한 댓글
    default List<CommentDto.Response> mentoringToMentoringCommentResponse(List<Comment> comments){
        return comments.stream()
                .map(mentoringComment -> CommentDto.Response
                        .builder()
                        .commentId(mentoringComment.getCommentId())
                        .commentContent(mentoringComment.getCommentContent())
                        .build())
                .collect(Collectors.toList());
    }

    //멘토링 상세 페이지
    default MentorDto.MentorsResponse mentoringToMentoringDetailsResponse(Mentor mentoring){
        List<Comment> comments = mentoring.getComments();

        MentorDto.MentorsResponse mentorsResponse = new MentorDto.MentorsResponse();
        mentorsResponse.setMentoringId(mentoring.getMentoringId());
        mentorsResponse.setMentoringContent(mentoring.getMentoringContent());
        mentorsResponse.setMentoringTitle(mentoring.getMentoringTitle());
        mentorsResponse.setViewCount(mentoring.getViewCount());
        mentorsResponse.setCreatedAt(mentoring.getCreatedAt());
        mentorsResponse.setUpdatedAt(mentoring.getUpdatedAt());
        mentorsResponse.setComments(mentoringToMentoringCommentResponse(comments));
        return mentorsResponse;
    }


}
