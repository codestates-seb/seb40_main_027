package com.yes27.study.mapper;

import com.yes27.study.dto.StudyDto;
import com.yes27.study.entity.Study;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-14T14:46:12+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class StudyMapperImpl implements StudyMapper {

    @Override
    public Study studyPostToStudy(StudyDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Study study = new Study();

        study.setStudyTitle( requestBody.getStudyTitle() );
        study.setStudyContent( requestBody.getStudyContent() );

        return study;
    }

    @Override
    public Study studyPatchToStudy(StudyDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Study study = new Study();

        study.setStudyId( requestBody.getStudyId() );
        study.setStudyTitle( requestBody.getStudyTitle() );
        study.setStudyContent( requestBody.getStudyContent() );
        study.setView( requestBody.getView() );
        study.setVote( requestBody.getVote() );
        study.setCreatedTime( requestBody.getCreatedTime() );
        study.setModifiedTime( requestBody.getModifiedTime() );

        return study;
    }

    @Override
    public StudyDto.Response studyToStudyResponse(Study study) {
        if ( study == null ) {
            return null;
        }

        StudyDto.Response response = new StudyDto.Response();

        response.setStudyId( study.getStudyId() );
        response.setStudyTitle( study.getStudyTitle() );
        response.setStudyContent( study.getStudyContent() );
        response.setView( study.getView() );
        response.setVote( study.getVote() );
        response.setCreatedTime( study.getCreatedTime() );
        response.setModifiedTime( study.getModifiedTime() );

        return response;
    }

    @Override
    public List<StudyDto.Response> studiesToStudyResponses(List<Study> studies) {
        if ( studies == null ) {
            return null;
        }

        List<StudyDto.Response> list = new ArrayList<StudyDto.Response>( studies.size() );
        for ( Study study : studies ) {
            list.add( studyToStudyResponse( study ) );
        }

        return list;
    }
}
