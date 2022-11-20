package com.yes27.member.mapper;

import com.yes27.member.dto.MemberDto;
import com.yes27.member.entity.Member;
import com.yes27.study.entity.Study;
import com.yes27.study_comment.entity.StudyComment;
import java.util.List;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
//    MemberDto.Response memberToMemberResponse(Member member);

    default MemberDto.Response memberToMemberResponse(Member member) {
        MemberDto.Response response = new MemberDto.Response();

        response.setMemberId(member.getMemberId());
        response.setEmail(member.getEmail());
        response.setNickname(member.getNickname());
        response.setPassword(member.getPassword());

        response.setStudies(studyTostudyResponse(member.getStudies()));
        response.setStudyComments(studyCommentToResponse(member.getStudyComments()));

        return response;
    }

    default List<MemberDto.StudySubset> studyTostudyResponse(List<Study> studies) {
        return studies
            .stream()
            .map(study -> {
                return MemberDto.StudySubset
                    .builder()
                    .studyId(study.getStudyId())
                    .studyTitle(study.getStudyTitle())
                    .studyContent(study.getStudyContent())
                    .view(study.getView())
                    .vote(study.getVote())
                    .build();
            })
            .collect(Collectors.toList());
    }

    default List<MemberDto.StudyCommentSubset> studyCommentToResponse(List<StudyComment> studyComments) {
        return studyComments
            .stream()
            .map(studyComment -> {
                return MemberDto.StudyCommentSubset
                    .builder()
                    .studyCommentId(studyComment.getStudyCommentId())
                    .comment(studyComment.getComment())
                    .vote(studyComment.getVote())
                    .build();
                })
            .collect(Collectors.toList());
    }
}
