package com.yes27.postscripcomment.mapper;


import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.postscripcomment.dto.PostscriptCommentDto;
import com.yes27.postscripcomment.entity.PostscriptComment;
import com.yes27.postscripcomment.service.PostscriptCommentService;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.service.PostscriptService;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostscriptCommentMapper {

    //댓글 생성
    default PostscriptComment postCommentPostToPostComment(long postscriptId,
                                                           PostscriptService postscriptService,
                                                           PostscriptCommentDto.Post postscriptCommentPostDto,
                                                           MemberService memberService) {

        PostscriptComment postscriptComment = new PostscriptComment();

//        Member member = memberService.getLoginMember();
        postscriptComment.setPostscriptComment(postscriptCommentPostDto.getPostscriptComment());
        postscriptComment.setPostscript(postscriptService.findVerifiedPostscript(postscriptId));
        postscriptComment.setMember(memberService.getLoginMember());

        return postscriptComment;
    }


    //댓글 수정
    default PostscriptComment postCommentPatchToPostComment(PostscriptCommentService postscriptCommentService,
                                                            PostscriptCommentDto.Patch postscriptCommentPatchDto,
                                                            MemberService memberService) {


        if (memberService.getLoginMember().getMemberId() !=postscriptCommentService.findPostscriptCommentWriter(postscriptCommentPatchDto.getPostscriptCommentId()).getMemberId()) { //해당 유저가 쓴 질문글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
        }
//        Member member = memberService.getLoginMember();
//        if (member.getMemberId() !=
//                postscriptCommentService.findPostscriptCommentWriter(postscriptCommentPatchDto.getPostCommentId()).getMemberId()) { //본인외 답 수정 삭제 불가
//            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_MEMBER);
//        }

        PostscriptComment postscriptComment = new PostscriptComment();

        postscriptComment.setPostscriptCommentId(postscriptCommentPatchDto.getPostscriptCommentId());
        postscriptComment.setPostscriptComment(postscriptCommentPatchDto.getPostscriptComment());


        return postscriptComment;
    }

    default PostscriptCommentDto.Response postCommentToPostCommentResponseDto(PostscriptComment postscriptComment, MemberMapper memberMapper) {

        Member member = postscriptComment.getMember();

        PostscriptCommentDto.Response postCommentResponseDto = new PostscriptCommentDto.Response(
                postscriptComment.getPostscriptCommentId(),
                postscriptComment.getPostscriptComment(),
                postscriptComment.getCreatedAt(),
                postscriptComment.getUpdatedAt(),
                postscriptComment.getMember().getNickname()
//                postscriptComment.setMember(memberMapper.memberToMemberResponse(member));

        );
        return postCommentResponseDto;
//        postCommentResponseDto.setPostCommentId(postscriptComment.getPostCommentId());
//        postCommentResponseDto.setPostCommentContent(postscriptComment.getPostCommentContent());
//        postCommentResponseDto.setCreatedAt(postscriptComment.getCreatedAt());
//        postCommentResponseDto.setUpdatedAt(postscriptComment.getUpdatedAt());
//        postCommentResponseDto.setPostscriptId(postscriptComment.getPostscript().getPostscriptId());

    }

    PostscriptCommentDto.postCommentResponse postCommentToPostCommentPostResponseDto2(PostscriptComment postscriptComment);

}
