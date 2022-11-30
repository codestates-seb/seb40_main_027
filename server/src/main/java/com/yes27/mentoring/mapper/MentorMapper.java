package com.yes27.mentoring.mapper;


import com.yes27.member.mapper.MemberMapper;
import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.entity.MentoringVote;
import com.yes27.mentoringcomment.entity.Comment;
import com.yes27.mentoringcomment.dto.CommentDto;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MentorMapper {

    Mentor mentorPostDtoToMentor(MentorDto.Post mentorPostDto);
    Mentor mentorPatchDtoToMentor(MentorDto.Patch mentorPatchDto);
    MentorDto.Response mentorToMentorResponseDto(Mentor mentor);

    MentorDto.MentoringResponse mentorToMentoringResponseDto(Mentor mentor);

    List<MentorDto.Response> mentorsToMentorResponseDtos(List<Mentor> mentors);

    //게시판에 대한 댓글
    default List<CommentDto.Response> mentoringToMentoringCommentResponse(List<Comment> comments){
        return comments.stream()
                .map(mentoringComment -> CommentDto.Response
                        .builder()
                        .commentId(mentoringComment.getCommentId())
                        .mentoringComment(mentoringComment.getMentoringComment())
                        .createdAt(mentoringComment.getCreatedAt())
                        .updatedAt(mentoringComment.getUpdatedAt())
                        .nickname(mentoringComment.getMember().getNickname())
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
        mentorsResponse.setTotalVotes(mentoring.getTotalVotes());
        mentorsResponse.setComments(mentoringToMentoringCommentResponse(comments));
        mentorsResponse.setVote(mentoring.getVote());
        return mentorsResponse;
    }


    default List<MentorDto.MentorMypageResponse> mentorsToMypageResponse(List<Mentor> mentors, MemberMapper memberMapper){
        if(mentors == null) return null;
        List<MentorDto.MentorMypageResponse> mentorMypageResponsesDtos = new ArrayList<>(mentors.size());

        for(Mentor mentor : mentors) {
            mentorMypageResponsesDtos.add(mentorToMypageResponseDto(mentor,memberMapper));
        }
        return mentorMypageResponsesDtos;
    }

    default MentorDto.MentorMypageResponse mentorToMypageResponseDto(Mentor mentor,MemberMapper memberMapper){

        MentorDto.MentorMypageResponse mentorMypageResponse = new MentorDto.MentorMypageResponse();
        mentorMypageResponse.setMentoringId(mentor.getMentoringId());
        mentorMypageResponse.setMentoringTitle(mentor.getMentoringTitle());
        mentorMypageResponse.setMentoringContent(mentor.getMentoringContent());
        mentorMypageResponse.setView(mentor.getViewCount());
        mentorMypageResponse.setTotalVotes(mentor.getTotalVotes());
        mentorMypageResponse.setTagName(mentor.getTagName());
        mentorMypageResponse.setCreatedAt(mentor.getCreatedAt());
        mentorMypageResponse.setUpdatedAt(mentor.getUpdatedAt());

        return mentorMypageResponse;
    }
}
