package com.yes27.postscript.mapper;

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
    default Postscript postscriptPostDtoToPostscript(PostscriptDto.Post postscriptPostDto) {

        Postscript postscript = new Postscript();

        postscript.setPostscriptTitle(postscriptPostDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPostDto.getPostscriptContent());

        List<Tag> tags = tagsDtosToTags(postscriptPostDto.getTags(), postscript);

        postscript.setTags(tags);

        return postscript;
    }


    //수정
    default Postscript postscriptPatchDtoToPostscript(PostscriptService postscriptService,
                                                      PostscriptDto.Patch postscriptPatchDto) {

        Postscript postscript = new Postscript();
        postscript.setPostscriptId(postscriptPatchDto.getPostscriptId());
        postscript.setPostscriptTitle(postscriptPatchDto.getPostscriptTitle());
        postscript.setPostscriptContent(postscriptPatchDto.getPostscriptContent());

        if(postscriptPatchDto.getTags() == null){ // 태그 수정을 하지 않는 경우 -> 기존 글에서 태그를 불러오기
            postscript.setTags(postscriptService.findVerifiedPostscript(postscript.getPostscriptId()).getTags());
        } else { // 태그 수정을 하는 경우
            List<Tag> tags = tagsDtosToTags(postscriptPatchDto.getTags(), postscript);
            postscript.setTags(tags);
        }

        return postscript;
    }


    //응답
    default PostscriptDto.PostscriptResponse postscriptToPostscriptResponseDto(Postscript postscript){

        PostscriptDto.PostscriptResponse postscriptResponseDto = new PostscriptDto.PostscriptResponse();
        postscriptResponseDto.setPostscriptId(postscript.getPostscriptId());
        postscriptResponseDto.setPostscriptStatus(postscript.getPostscriptStatus());
        postscriptResponseDto.setPostscriptTitle(postscript.getPostscriptTitle());
        postscriptResponseDto.setPostscriptContent(postscript.getPostscriptContent());
        postscriptResponseDto.setPostLike(postscript.getPostLikes());
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
        postscriptResponse.setPostLike(postscript.getPostLikes());
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

    default List<Tag> tagsDtosToTags(List<TagDto> tagsDtos, Postscript postscript){

        return tagsDtos.stream().distinct().map(tagDto -> {
            Tag tag = new Tag();
            tag.addPostscript(postscript);
            tag.setTagName(tagDto.getTagName());

            // 유저 추가하기
            return tag;
        }).collect(Collectors.toList());
    }

    default List<TagResponseDto> tagsToTagResponseDtos(List<Tag> tags) {

        return tags.stream()
                .map(tag -> TagResponseDto
                        .builder()
                        .tagName(tag.getTagName())
                        .build())
                .distinct()
                .collect(Collectors.toList());
    }

    // postscript - comment 연동

}
