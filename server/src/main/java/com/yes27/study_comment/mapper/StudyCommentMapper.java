package com.yes27.study_comment.mapper;

import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.dto.StudyCommentDto;
import com.yes27.study_comment.entity.StudyComment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StudyCommentMapper {

    // StudyCommentDto.Post -> StudyComment
    default StudyComment commentPostToComment(StudyCommentDto.Post requestBody) {
        Member member = new Member();
        Study study = new Study();
        StudyComment studyComment = new StudyComment();

        member.setMemberId(requestBody.getMemberId());
        study.setStudyId(requestBody.getStudyId());
        studyComment.setComment(requestBody.getComment());

        return studyComment;
    }

    StudyComment commentPatchToComment(StudyCommentDto.Patch requestBody);
    StudyCommentDto.Response commentToCommentResponse(StudyComment studyComment);
}
