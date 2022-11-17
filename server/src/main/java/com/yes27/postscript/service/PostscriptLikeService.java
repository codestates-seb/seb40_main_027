package com.yes27.postscript.service;

import com.yes27.postscript.entity.PostscriptLike;
import com.yes27.postscript.repository.PostscriptLikeRepository;
import com.yes27.postscript.repository.PostscriptRepository;
import org.springframework.stereotype.Service;

@Service
public class PostscriptLikeService {

    private PostscriptService postscriptService;
    private PostscriptRepository postscriptRepository;
    private PostscriptLikeRepository postscriptLikeRepository;

    public PostscriptLikeService (PostscriptService postscriptService,
                                  PostscriptRepository postscriptRepository,
                                  PostscriptLikeRepository postscriptLikeRepository){

        this.postscriptService= postscriptService;
        this.postscriptRepository = postscriptRepository;
        this.postscriptLikeRepository = postscriptLikeRepository;
        // 유저 추가하기

    }

    public PostscriptLike PostscriptLike(long postscriptId, int postLike){


        PostscriptLike postscriptLike = postscriptLikeRepository;

        //유저 추가하기


        if(postscriptLike == null){

            PostscriptLike newLike = new PostscriptLike();
            newLike.addPostscript(postscriptService.findPostscript(postscriptId));
            newLike.setPostLike(postLike);
            postscriptLikeRepository.save(newLike);
            postscriptService.refreshLikes(postscriptId);
            //유저 추가하기

            return newLike;
        } else {
            postscriptLike.setPostLike(postLike);
            postscriptLikeRepository.save(postscriptLike);
            postscriptService.refreshLikes(postscriptId);
            return postscriptLike;
        }
    }

    public int getPostscriptLikes (long postscriptId) {
        int PostscriptLikes = postscriptLikeRepository.findLikeValue(postscriptId);
        return PostscriptLikes;
    }


}
