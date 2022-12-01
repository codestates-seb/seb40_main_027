package com.yes27.postscript.mapper;

import com.yes27.member.dto.MemberDto;
import com.yes27.postscript.dto.PostscriptVoteResponseDto;
import com.yes27.postscript.entity.PostscriptVote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostscriptVoteMapper {

//    default PostscriptVoteResponseDto.Response postVoteToPostVoteDto (PostscriptVote postscriptVote){
//        PostscriptVoteResponseDto.Response postscriptVoteResponseDto = new PostscriptVoteResponseDto();
//        postscriptVoteResponseDto.setPostscriptId(postscriptVote.getPostscript().getPostscriptId());
//        postscriptVoteResponseDto.setVote(postscriptVote.getVote());
//        postscriptVoteResponseDto.setTotalVotes(postscriptVote.getPostscript().getTotalVotes());
//
//        return postscriptVoteResponseDto;
//    }
    PostscriptVoteResponseDto postscriptToVoteResponseDto(PostscriptVote postscriptVote);
}
