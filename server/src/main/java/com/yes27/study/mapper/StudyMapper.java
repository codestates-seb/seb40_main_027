package com.yes27.study.mapper;

import com.yes27.member.entity.Member;
import com.yes27.study.dto.StudyDto;
import com.yes27.study.dto.StudyDto.PagingResponse;
import com.yes27.study.dto.StudyDto.StudyCommentSubset;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.entity.StudyComment;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyMapper {

    //  StudyDto.Post -> Study
    default Study studyPostToStudy(StudyDto.Post requestBody) {
        Member member = new Member();
        Study study = new Study();

//        member.setMemberId(requestBody.getMemberId());
        study.setStudyTitle(requestBody.getStudyTitle());
        study.setStudyContent(requestBody.getStudyContent());
        study.setTagName(requestBody.getTagName());

        return study;
    }

//    Study studyPatchToStudy(StudyDto.Patch requestBody);

//    List<StudyDto.Response> studiesToStudyResponses(List<Study> studies);


    StudyDto.PostResponse studyToPostResponse(Study study);
    StudyDto.PatchResponse studyToPatchResponse(Study study);

    // TODO Studies -> PagingResponses
    default List<StudyDto.PagingResponse> studiesToPagingResponses(List<Study> studies) {
        if (studies == null) {
            return null;
        } else {
            List<StudyDto.PagingResponse> list = new ArrayList(studies.size());
            Iterator var3 = studies.iterator();

            while(var3.hasNext()) {
                Study study = (Study)var3.next();
                list.add(this.studyToPagingResponse(study));
            }

            return list;
        }
    };
    default StudyDto.PagingResponse studyToPagingResponse(Study study) {
        if (study == null) {
            return null;
        } else {
            StudyDto.PagingResponse pagingResponse = new StudyDto.PagingResponse();
            pagingResponse.setStudyId(study.getStudyId());
            pagingResponse.setStudyTitle(study.getStudyTitle());
            pagingResponse.setStudyContent(study.getStudyContent());
            pagingResponse.setTotalVotes(study.getVotes().size());
            pagingResponse.setView(study.getViews().size());
            pagingResponse.setCreatedAt(study.getCreatedAt());
            pagingResponse.setUpdatedAt(study.getUpdatedAt());
            pagingResponse.setTagName(study.getTagName());
            pagingResponse.setMember(this.memberToMemberSubset(study.getMember()));
            return pagingResponse;
        }
    }


    // TODO  Study -> StudyResponse
    default StudyDto.Response studyToStudyResponse(Study study) {
        StudyDto.Response response = new StudyDto.Response();
        response.setStudyId( study.getStudyId() );
        response.setStudyTitle( study.getStudyTitle() );
        response.setStudyContent( study.getStudyContent() );
        response.setCreatedAt( study.getCreatedAt() );
        response.setUpdatedAt( study.getUpdatedAt() );
        response.setTagName(study.getTagName());
        response.setTotalVotes(study.getVotes().size());  //
        response.setView(study.getViews().size());
        response.setStudyComments( studyCommentListToStudyCommentSubsetList( study.getStudyComments() ) );
        response.setMember( memberToMemberSubset( study.getMember() ) );
        return response;
    }
    default StudyDto.MemberSubset memberToMemberSubset(Member member) {
        if ( member == null ) {
            return null;
        }
        StudyDto.MemberSubset.MemberSubsetBuilder memberSubset = StudyDto.MemberSubset.builder();
        memberSubset.memberId( member.getMemberId() );
        memberSubset.email( member.getEmail() );
        memberSubset.nickname( member.getNickname() );
        return memberSubset.build();
    }
    default StudyDto.StudyCommentSubset studyCommentToStudyCommentSubset(StudyComment studyComment) {
        if ( studyComment == null ) {
            return null;
        }
        StudyDto.StudyCommentSubset.StudyCommentSubsetBuilder studyCommentSubset = StudyDto.StudyCommentSubset.builder();
        studyCommentSubset.studyCommentId( studyComment.getStudyCommentId() );
        studyCommentSubset.comment( studyComment.getStudyComment() );
        studyCommentSubset.createdAt( studyComment.getCreatedAt() );
        studyCommentSubset.updatedAt( studyComment.getUpdatedAt() );
        studyCommentSubset.nickname(studyComment.getMember().getNickname());
//        studyCommentSubset.member( memberToMemberSubset( studyComment.getMember() ) );
        return studyCommentSubset.build();
    }
    default List<StudyDto.StudyCommentSubset> studyCommentListToStudyCommentSubsetList(List<StudyComment> list) {
        if ( list == null ) {
            return null;
        }
        List<StudyDto.StudyCommentSubset> list1 = new ArrayList<StudyCommentSubset>( list.size() );
        for ( StudyComment studyComment : list ) {
            list1.add( studyCommentToStudyCommentSubset( studyComment ) );
        }
        return list1;
    }
}
