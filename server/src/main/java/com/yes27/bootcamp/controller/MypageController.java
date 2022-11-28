package com.yes27.bootcamp.controller;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.repository.MybootcampRepository;
import com.yes27.bootcamp.service.MybootcampService;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("mypage")
public class MypageController {
    private final MybootcampService mybootcampService;

    private final MemberService memberService;

    public MypageController( MybootcampService mybootcampService, MemberService memberService) {
        this.mybootcampService = mybootcampService;
        this.memberService = memberService;
    }

//    @GetMapping
//    public ResponseEntity getMy(HttpServletRequest request){
//        Member findMember = memberService.findMember(request);
//        List<BootCamp> mylist = mybootcampService.getvotes(findMember);
//        System.out.println(mylist);
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
