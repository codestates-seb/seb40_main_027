package com.yes27.postscript.service;

import com.yes27.member.entity.Member;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.entity.PostscriptView;
import com.yes27.postscript.repository.PostscriptViewRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostscriptViewService {

    private final PostscriptViewRepository postscriptViewRepository;

    public PostscriptViewService(PostscriptViewRepository postscriptViewRepository){
        this.postscriptViewRepository = postscriptViewRepository;
    }


    public int addView(Postscript postscript, Member member){
        int findView = findVerifiedMemberPostscript(postscript,member);
        if(findView==0){
            return 1;
        }

        PostscriptView postscriptView=new PostscriptView();
        postscriptView.setPostscript(postscript);
        postscriptView.setMember(member);
        postscriptViewRepository.save(postscriptView);
        return 1;
    }


    public int findVerifiedMemberPostscript(Postscript postscript,Member member){
        Optional<PostscriptView> optionalPostscriptView = postscriptViewRepository.findByPostscriptAndMember(postscript,member);
        if(optionalPostscriptView.isPresent()){
            return 0;
        } else {
            return 1;
        }
    }
}
