package com.yes27.study_comment.mapper;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.dto.StudyCommentDto.StudySubset;
import com.yes27.study_comment.entity.StudyComment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyCommentMapper {
    // StudyCommentDto.Post -> StudyComment
    default StudyComment commentPostToComment(StudyCommentDto.Post requestBody) {
        Study study = new Study();
        StudyComment studyComment = new StudyComment();

        study.setStudyId(requestBody.getStudyId());
        studyComment.setComment(requestBody.getComment());

        studyComment.addStudy(study);

        return studyComment;
    }

    StudyComment commentPatchToComment(StudyCommentDto.Patch requestBody);

    // StudyComment -> StudyCommentDto.Response
    default StudyCommentDto.Response commentToCommentResponse(StudyComment studyComment) {
        Study study = studyComment.getStudy();

        StudyCommentDto.Response response = new StudyCommentDto.Response();

        response.setStudyCommentId(studyComment.getStudyCommentId());
        response.setComment(studyComment.getComment());
        response.setVote(studyComment.getVote());
        response.setCreatedAt(studyComment.getCreatedAt());
        response.setUpdatedAt(studyComment.getUpdatedAt());

        response.setStudy(studyToStudySubset(study));

        return response;
    }

    default StudySubset studyToStudySubset(Study study) {
        return StudySubset
            .builder()
            .studyId(study.getStudyId())
            .studyTitle(study.getStudyTitle())
            .studyContent(study.getStudyContent())
            .view(study.getView())
            .vote(study.getVote())
            .createdAt(study.getCreatedAt())
            .updatedAt(study.getUpdatedAt())
            .build();
    }
}
