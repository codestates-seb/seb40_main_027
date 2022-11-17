package com.yes27.study_comment.mapper;

import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.entity.StudyComment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyCommentMapper {
    StudyComment commentPostToComment(StudyCommentDto.Post requestBody);
    StudyComment commentPatchToComment(StudyCommentDto.Patch requestBody);
//    StudyCommentDto.Response commentToCommentResponse(StudyComment studyComment);

    default StudyCommentDto.Response commentToCommentResponse(StudyComment studyComment) {
        StudyCommentDto.Response response = new StudyCommentDto.Response();

        response.setStudyCommentId( studyComment.getStudyCommentId() );
        response.setComment( studyComment.getComment() );
        response.setVote( studyComment.getVote() );
        response.setCreatedAt( studyComment.getCreatedAt() );
        response.setUpdatedAt( studyComment.getUpdatedAt() );

        response.setStudyId(studyComment.getStudy().getStudyId());

        return response;
    }
}
