package com.yes27.mybootcamp.controller;

import com.yes27.bootcamp.dto.BootcampDto;
import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.mybootcamp.entity.MybootcampMapping;
import com.yes27.mybootcamp.mapper.MybootcampMapper;
import com.yes27.mybootcamp.service.MybootcampService;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = {"http://bootlamp.s3-website.ap-northeast-2.amazonaws.com",
    "http://ec2-3-38-21-95.ap-northeast-2.compute.amazonaws.com:8080"})
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
    public ResponseEntity getMy(HttpServletRequest request,
                                @RequestParam int page, int size) {
        Member findMember = this.memberService.findMember(request);
        Page<MybootcampMapping> pageMybootcamp = this.mybootcampService.getMybootcamp(findMember, page-1, size);
        List<MybootcampMapping> mybootcampMappings = pageMybootcamp.getContent();
        List<BootcampDto.Response> response = this.mybootcampMapper.bootcampToMyBootcampResponse(mybootcampMappings);
        return new ResponseEntity(new MultiResponseDto<>(response,pageMybootcamp), HttpStatus.OK);
    }
}
