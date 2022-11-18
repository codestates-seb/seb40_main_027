package com.yes27.postscript.mapper;

import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.dto.PostscriptLikeDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptLike;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostscriptLikeMapper {

    default PostscriptLikeDto postLikeToPostLikeDto (PostscriptLike postscriptLike){
        PostscriptLikeDto postscriptLikeDto = new PostscriptLikeDto();
        postscriptLikeDto.setPostscriptId(postscriptLike.getPostscript().getPostscriptId());
        postscriptLikeDto.setPostLike(postscriptLike.getPostLike());
        postscriptLikeDto.setTotalPostscriptLike(postscriptLike.getPostscript().getPostLikes());

        return postscriptLikeDto;
    }
}
