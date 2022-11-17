package com.yes27.postscript.mapper;

import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.service.PostscriptService;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;


@Mapper(componentModel = "spring")
public interface PostscriptMapper {


    //생성
    default Postscript postscriptPostDtoToPostscript(PostscriptDto.Post postscriptPostDto) {

        Postscript postscript = new Postscript();

        postscript.setPostscriptTitle(postscriptPostDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPostDto.getPostscriptContent());


        return postscript;
    }


    //수정
    default Postscript postscriptPatchDtoToPostscript(PostscriptService postscriptService,
                                                      PostscriptDto.Patch postscriptPatchDto) {

        Postscript postscript = new Postscript();
        postscript.setPostscriptId(postscriptPatchDto.getPostscriptId());
        postscript.setPostscriptTitle(postscriptPatchDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPatchDto.getPostscriptContent());


        return postscript;
    }

    //응답
    default PostscriptDto.PostscriptResponse postscriptToPostscriptResponseDto(Postscript postscript){

        PostscriptDto.PostscriptResponse postscriptResponseDto = new PostscriptDto.PostscriptResponse();
        postscriptResponseDto.setPostscriptId(postscript.getPostscriptId());
        postscriptResponseDto.setPostscriptStatus(postscript.getPostscriptStatus());
        postscriptResponseDto.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptResponseDto.setPostscriptContent(postscript.getPostscriptContent());
        postscriptResponseDto.setPostscriptLike(postscript.getPostscriptLikes());
        postscriptResponseDto.setPostscriptView(postscript.getPostscriptView());


        postscriptResponseDto.setCreatedAt(postscript.getCreatedAt());
        postscriptResponseDto.setUpdatedAt(postscript.getUpdatedAt());

        return postscriptResponseDto;
    }

    // 질문 조회
    default PostscriptDto.PostscriptResponse postscriptToPostscriptResponse(Postscript postscript){

        PostscriptDto.PostscriptResponse postscriptResponse = new PostscriptDto.PostscriptResponse();
        postscriptResponse.setPostscriptId(postscript.getPostscriptId());
        postscriptResponse.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptResponse.setPostscriptContent(postscript.getPostscriptContent());
        postscriptResponse.setPostscriptView(postscript.getPostscriptView());
        postscriptResponse.setPostscriptLike(postscript.getPostscriptLikes());
        postscriptResponse.setPostscriptStatus(postscript.getPostscriptStatus());
        postscriptResponse.setCreatedAt(postscript.getCreatedAt());
        postscriptResponse.setUpdatedAt(postscript.getUpdatedAt());
//        postscriptResponse.setPostComments();

        // 댓글연동 추가하기
        // 태그, 생성,수정날자 추가해야함
        return postscriptResponse;
    }

    //여러개 조회
    default List<PostscriptDto.PostscriptResponse> postscriptsToPostscriptResponseDtos(List<Postscript> postscripts) {
        if(postscripts == null) return null;

        List<PostscriptDto.PostscriptResponse> postscriptResponseDtos = new ArrayList<>(postscripts.size());

        for(Postscript postscript : postscripts) {
            postscriptResponseDtos.add(postscriptToPostscriptResponseDto(postscript));
        }

        return postscriptResponseDtos;
    }

    // postscript - comment 연동

}
