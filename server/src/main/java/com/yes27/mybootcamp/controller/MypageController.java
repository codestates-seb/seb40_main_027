package com.yes27.mybootcamp.controller;

import com.yes27.bootcamp.dto.BootcampDto;
import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.mybootcamp.mapper.MybootcampMapper;
import com.yes27.mybootcamp.service.MybootcampService;
import com.yes27.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("users/mypage/bootcampLike")
public class MypageController {
    private final MybootcampService mybootcampService;
    private final MybootcampMapper mybootcampMapper;
    private final MemberService memberService;

    public MypageController(MybootcampService mybootcampService, MybootcampMapper mybootcampMapper, MemberService memberService) {
        this.mybootcampService = mybootcampService;
        this.mybootcampMapper = mybootcampMapper;
        this.memberService = memberService;
    }

    @GetMapping
    public ResponseEntity getMy(HttpServletRequest request) {
        Member findMember = this.memberService.findMember(request);
        List<BootCamp> mybootcampList = this.mybootcampService.getMybootcamp(findMember);
        List<BootcampDto.Response> response = this.mybootcampMapper.bootcampToMyBootcampResponse(mybootcampList);
        return new ResponseEntity(new SingleResponseDto(response), HttpStatus.OK);
    }
}
