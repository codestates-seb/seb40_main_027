package com.yes27.study.mapper;

import com.yes27.member.entity.Member;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyMapper {

    //  StudyDto.Post -> Study
    default Study studyPostToStudy(StudyDto.Post requestBody) {
        Member member = new Member();
        Study study = new Study();

        member.setMemberId(requestBody.getMemberId());
        study.setStudyTitle(requestBody.getStudyTitle());
        study.setStudyContent(requestBody.getStudyContent());

        return study;
    }

    Study studyPatchToStudy(StudyDto.Patch requestBody);
    StudyDto.Response studyToStudyResponse(Study study);
    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);
}
