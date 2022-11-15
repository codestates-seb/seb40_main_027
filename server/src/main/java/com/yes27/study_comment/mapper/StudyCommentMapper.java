package com.yes27.study_comment.mapper;

import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.entity.StudyComment;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyCommentMapper {
    StudyComment commentPostToComment(StudyCommentDto.Post requestBody);
    StudyComment commentPatchToComment(StudyCommentDto.Patch requestBody);
    StudyCommentDto.Response commentToCommentResponse(StudyComment studyComment);
    List<StudyCommentDto.Response> commentsToCommentResponses(List<StudyComment> studyComments);
}
