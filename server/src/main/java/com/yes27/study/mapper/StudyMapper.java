package com.yes27.study.mapper;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.entity.StudyComment;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostToStudy(StudyDto.Post requestBody);
    Study studyPatchToStudy(StudyDto.Patch requestBody);
//    StudyDto.Response studyToStudyResponse(Study study);
    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);

    default StudyDto.Response studyToStudyResponse(Study study) {
        StudyDto.Response response = new StudyDto.Response();

        response.setStudyId( study.getStudyId() );
        response.setStudyTitle( study.getStudyTitle() );
        response.setStudyContent( study.getStudyContent() );
        response.setView( study.getView() );
        response.setVote( study.getVote() );
        response.setCreatedAt( study.getCreatedAt() );
        response.setUpdatedAt( study.getUpdatedAt() );

        for (StudyComment studyComment : study.getStudyComments()) {
            StudyDto.StudyCommentSubset tmp = new StudyDto.StudyCommentSubset();
            tmp.setStudyCommentId(studyComment.getStudyCommentId());
            tmp.setComment(studyComment.getComment());
            response.getStudyComments().add(tmp);
        }

        return response;
    }
}
