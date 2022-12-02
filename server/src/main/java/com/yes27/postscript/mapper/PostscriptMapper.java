package com.yes27.postscript.mapper;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.dto.TagDto;
import com.yes27.postscript.dto.TagResponseDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.Tag;
import com.yes27.postscript.service.PostscriptService;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface PostscriptMapper {


    //생성
    default Postscript postscriptPostDtoToPostscript(PostscriptDto.Post postscriptPostDto,
                                                     MemberService memberService) {

        Postscript postscript = new Postscript();

        postscript.setPostscriptTitle(postscriptPostDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPostDto.getPostscriptContent());

        Member member = memberService.getLoginMember();
//        List<Tag> tags = tagsDtosToTags(postscriptPostDto.getTags(), postscript, member);

        postscript.setTagName(postscriptPostDto.getTagName());
        postscript.setMember(member);

        return postscript;
    }


    //수정
    default Postscript postscriptPatchDtoToPostscript(PostscriptService postscriptService,
                                                      PostscriptDto.Patch postscriptPatchDto,
                                                      MemberService memberService,
                                                      long postscriptId) {

        Member member = memberService.getLoginMember();
        if (member.getMemberId() !=
                postscriptService.findPostscriptWriter(postscriptPatchDto.getPostscriptId()).getMemberId()){ //해당 유저가 쓴 질문글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
        }

        Postscript postscript = new Postscript();
        postscript.setPostscriptId(postscriptPatchDto.getPostscriptId());
        postscript.setPostscriptTitle(postscriptPatchDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPatchDto.getPostscriptContent());
        postscript.setMember(member);
        postscript.setUpdatedAt(postscriptPatchDto.getUpdatedAt());

//        // 태그 수정을 하지 않는 경우 -> 기존 글에서 태그를 불러오기
//        if (postscriptPatchDto.getTags() == null) {
//            postscript.setTags(postscriptService.findVerifiedPostscript(postscript.getPostscriptId()).getTags());
//        } else { // 태그 수정할떄
//            List<Tag> tags = tagsDtosToTags(postscriptPatchDto.getTags(), postscript, member);
//            postscript.setTags(tags);
//        }
        postscript.setTagName(postscriptPatchDto.getTagName());

        return postscript;
    }

    default List<PostscriptCommentDto.Response> postscriptToPostscriptCommentResponse(List<PostscriptComment> postscriptComments) {
        return postscriptComments.stream()
                .map(postscriptComment -> PostscriptCommentDto.Response
                        .builder()
                        .postscriptCommentId(postscriptComment.getPostscriptCommentId())
                        .postscriptComment(postscriptComment.getPostscriptComment())
                        .createdAt(postscriptComment.getCreatedAt())
                        .updatedAt(postscriptComment.getUpdatedAt())
                        .nickname(postscriptComment.getMember().getNickname())
                        .build())
                .collect(Collectors.toList());
    }

    // 질문 응답
    default PostscriptDto.PostscriptResponse postscriptToPostscriptResponseDto(Postscript postscript, MemberMapper memberMapper) {

//        List<PostscriptComment> postscriptComments = postscript.getPostComments();

        PostscriptDto.PostscriptResponse postscriptResponse = new PostscriptDto.PostscriptResponse();
        postscriptResponse.setPostscriptId(postscript.getPostscriptId());
        postscriptResponse.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptResponse.setPostscriptContent(postscript.getPostscriptContent());
        postscriptResponse.setView(postscript.getView());

        postscriptResponse.setTotalVotes(postscript.getTotalVotes());

//        postscriptResponse.setPostscriptStatus(postscript.getPostscriptStatus());

        // Member 관계 추가
        Member member = postscript.getMember();//질문 작성자 정보 추가
        postscriptResponse.setMember(memberMapper.memberToMemberResponse2(member));

        // 태그
//        postscriptResponse.setTags(tagsToTagResponseDtos(postscript.getTags()).stream().distinct().collect(Collectors.toList()));
        postscriptResponse.setTagName(postscript.getTagName());
        // 댓글
//        postscriptResponse.setPostComments(postscriptToPostscriptCommentResponse(postscriptComments));

        postscriptResponse.setCreatedAt(postscript.getCreatedAt());
        postscriptResponse.setUpdatedAt(postscript.getUpdatedAt());

        return postscriptResponse;
    }

    // 게시글 상세 조회 일반
    default PostscriptDto.PostscriptDetailResponse postscriptToPostscriptDetailResponseDto(Postscript postscript, MemberMapper memberMapper) {

        List<PostscriptComment> postscriptComments = postscript.getPostComments();

        PostscriptDto.PostscriptDetailResponse postscriptResponse = new PostscriptDto.PostscriptDetailResponse();
        postscriptResponse.setPostscriptId(postscript.getPostscriptId());
        postscriptResponse.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptResponse.setPostscriptContent(postscript.getPostscriptContent());
        postscriptResponse.setView(postscript.getView());

        postscriptResponse.setVote(postscript.getVote()); // 좋아요 유무 표현
        postscriptResponse.setTotalVotes(postscript.getTotalVotes()); //전체 투표수

        // Member 관계 추가
        Member member = postscript.getMember();//질문 작성자 정보 추가
        postscriptResponse.setMember(memberMapper.memberToMemberResponse2(member));

        // 태그
        postscriptResponse.setTagName(postscript.getTagName());
        // 댓글
        postscriptResponse.setPostscriptComments(postscriptToPostscriptCommentResponse(postscriptComments));

        postscriptResponse.setCreatedAt(postscript.getCreatedAt());

        postscriptResponse.setUpdatedAt(postscript.getUpdatedAt());

        return postscriptResponse;
    }

    PostscriptDto.PostscriptPostResponse postscriptToPostscriptResponse2(Postscript postscript);

    // Mypage 조회용
    default List<PostscriptDto.PostscriptMypageResponse> postscriptToMypageResponse(List<Postscript> postscripts, MemberMapper memberMapper) {

        if (postscripts == null) return null;
        List<PostscriptDto.PostscriptMypageResponse> postscriptMypageResponseDtos = new ArrayList<>(postscripts.size());

        for (Postscript postscript : postscripts) {
            postscriptMypageResponseDtos.add(postscriptToMypageResponseDto(postscript, memberMapper));
        }

        return postscriptMypageResponseDtos;
    }

    //마이페이지용 응답 dto
    default PostscriptDto.PostscriptMypageResponse postscriptToMypageResponseDto(Postscript postscript, MemberMapper memberMapper) {

        PostscriptDto.PostscriptMypageResponse postscriptMypageResponse = new PostscriptDto.PostscriptMypageResponse();
        postscriptMypageResponse.setPostscriptId(postscript.getPostscriptId());
        postscriptMypageResponse.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptMypageResponse.setPostscriptContent(postscript.getPostscriptContent());
        postscriptMypageResponse.setView(postscript.getView());

        postscriptMypageResponse.setTotalVotes(postscript.getTotalVotes());


        postscriptMypageResponse.setTagName(postscript.getTagName());

        postscriptMypageResponse.setCreatedAt(postscript.getCreatedAt());
        postscriptMypageResponse.setUpdatedAt(postscript.getUpdatedAt());

        return postscriptMypageResponse;
    }

    //여러개 조회
    default List<PostscriptDto.PostscriptResponse> postscriptsToPostscriptResponseDtos(List<Postscript> postscripts, MemberMapper memberMapper) {
        if (postscripts == null) return null;
        List<PostscriptDto.PostscriptResponse> postscriptResponseDtos = new ArrayList<>(postscripts.size());

        for (Postscript postscript : postscripts) {
            postscriptResponseDtos.add(postscriptToPostscriptResponseDto(postscript, memberMapper));
        }

        return postscriptResponseDtos;
    }

//    default List<Tag> tagsDtosToTags(List<TagDto> tagsDtos, Postscript postscript, Member member) {
//
//        return tagsDtos.stream().distinct().map(tagDto -> {
//            Tag tag = new Tag();
//            tag.setMember(member);
//            tag.addPostscript(postscript);
//            tag.setTagName(tagDto.getTagName());
//
//            return tag;
//        }).collect(Collectors.toList());
//    }
//
//    default List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {
//
//        return tags.stream()
//                .map(tag -> TagResponseDto
//                        .builder()
//                        .tagName(tag.getTagName())
//                        .build())
//                .distinct()
//                .collect(Collectors.toList());
//    }
}
