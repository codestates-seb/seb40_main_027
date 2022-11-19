package com.yes27.study.mapper;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.dto.StudyDto.StudyCommentSubset;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.entity.StudyComment;
import java.util.List;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostToStudy(StudyDto.Post requestBody);
    Study studyPatchToStudy(StudyDto.Patch requestBody);
//    StudyDto.Response studyToStudyResponse(Study study);
    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);

    // Study -> StudyDto.Response
    default StudyDto.Response studyToStudyResponse(Study study) {
        List<StudyComment> studyComments = study.getStudyComments();

        StudyDto.Response response = new StudyDto.Response();

        response.setStudyId( study.getStudyId() );
        response.setStudyTitle( study.getStudyTitle() );
        response.setStudyContent( study.getStudyContent() );
        response.setView( study.getView() );
        response.setVote( study.getVote() );
        response.setCreatedAt( study.getCreatedAt() );
        response.setUpdatedAt( study.getUpdatedAt() );

        response.setStudyCommentSubSets(studyCommentsToStudyCommentSubsets(studyComments));

        return response;
    }

    default List<StudyCommentSubset> studyCommentsToStudyCommentSubsets(
        List<StudyComment> studyComments) {

        return studyComments
            .stream()
            .map(studyComment -> {
                return StudyCommentSubset
                    .builder()
                    .studyCommentId(studyComment.getStudyCommentId())
                    .comment(studyComment.getComment())
                    .vote(studyComment.getVote())
                    .createdAt(studyComment.getCreatedAt())
                    .updatedAt(studyComment.getUpdatedAt())
                    .build();
            })
            .collect(Collectors.toList());
    }
}
