package com.yes27.postscript.controller;

import com.yes27.postscript.entity.PostscriptLike;
import com.yes27.postscript.mapper.PostscriptLikeMapper;
import com.yes27.postscript.service.PostscriptLikeService;
import com.yes27.postscript.service.PostscriptService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/postscript")
@CrossOrigin
public class PostscriptLikeController {

    private final PostscriptLikeService postscriptLikeService;
    private final PostscriptLikeMapper postscriptLikeMapper;

    public PostscriptLikeController(PostscriptLikeService postscriptLikeService,
                                    PostscriptLikeMapper postscriptLikeMapper){

        this.postscriptLikeService = postscriptLikeService;
        this.postscriptLikeMapper=postscriptLikeMapper;
    }

//    @PostMapping("{postscript-Id}/like")
//    public ResponseEntity likePostscript(@PathVariable("postscript-Id") @Positive long postscriptId,
//                                         @RequestParam(value = "like",defaultValue="0") int postLike) {
//
//        PostscriptLike postscriptLike = postscriptLikeService.PostscriptLike(postscriptId,postLike);
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(postscriptLikeMapper.postLikeToPostLikeDto(postscriptLike)), HttpStatus.OK);
//    }
}
