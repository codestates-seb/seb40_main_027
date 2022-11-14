package com.yes27.study.mapper;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyMapper {
    Study studyPostToStudy(StudyDto.Post requestBody);
    Study studyPatchToStudy(StudyDto.Patch requestBody);
    StudyDto.Response studyToStudyResponse(Study study);
    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);
}
