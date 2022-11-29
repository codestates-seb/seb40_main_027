package com.yes27.bootcamp.controller;


import com.yes27.bootcamp.dto.BootcampDto;
import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.mapper.BootcampMapper;
import com.yes27.bootcamp.service.BootcampService;
import com.yes27.mybootcamp.service.MybootcampService;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;

import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/bootcamp")
public class BootcampController {
    private final BootcampService bootcampService;
    private final MemberService memberService;

    private final MybootcampService mybootcampService;
    private final BootcampMapper mapper;

    public BootcampController(BootcampService bootcampService, MemberService memberService, MybootcampService mybootcampService, BootcampMapper mapper) {
        this.bootcampService = bootcampService;
        this.memberService = memberService;
        this.mybootcampService = mybootcampService;
        this.mapper = mapper;
    }
    //일정 수정
    @PatchMapping("/{bootcampId}")
    public ResponseEntity patchCamp(@PathVariable("bootcampId") Long bootcampId,
                                    @RequestBody BootcampDto.Patch patchDto,
                                    HttpServletRequest request){
        Member findMember = memberService.findMember(request);
        if(findMember != null && request.isUserInRole("ROLE_ADMIN")) {
            BootCamp bootCamp = mapper.bootPatchDtoToBootcamp(patchDto);
            BootcampDto.PatchResponse response = mapper.bootcampToBootPatchResponseDto(bootcampService.update(bootCamp, bootcampId));
            return new ResponseEntity(response, HttpStatus.OK);
        }
        else{
            throw new RuntimeException("관리자 계정이 아닙니다");
        }
    }

    //일정 조회
    @GetMapping
    public ResponseEntity getCamps(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size,
                                   @RequestParam(required = false) String sort){
        if(sort == null) {
            Page<BootCamp> pageBootcamps = bootcampService.findBootcamps(page - 1, size);
            List<BootCamp> bootcamps = pageBootcamps.getContent();
            return new ResponseEntity(new MultiResponseDto<>(mapper.bootcampToBootcampResponsesDto(bootcamps),pageBootcamps),HttpStatus.OK);
        }
        Page<BootCamp> pageBootcamps = bootcampService.findBootscamp(page-1, size, sort);
        List<BootCamp> bootcamps = pageBootcamps.getContent();

        return new ResponseEntity(new MultiResponseDto<>(mapper.bootcampToBootcampResponsesDto(bootcamps),pageBootcamps), HttpStatus.OK);

    }
    //상세 조회
    @GetMapping("/{bootcampId}")
    public ResponseEntity getCamp(@PathVariable("bootcampId") Long bootcampId){
        BootcampDto.DetailResponseDto response = mapper.bootcampTobootCampDetailResponseDto(bootcampService.findBootcamp(bootcampId));
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);

    }


    //삭제
    @DeleteMapping("/{bootcampId}")
    public ResponseEntity deleteCamp(@PathVariable("bootcampId") Long bootcampId){
        bootcampService.delete(bootcampId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //찜하기
    @PostMapping("/votes/{bootcampId}")
    public ResponseEntity likeCamp(@PathVariable("bootcampId") Long bootcampId,
                                   @RequestParam int vote,
                                   HttpServletRequest request){
        Member member = memberService.findMember(request);
        BootCamp findCamp = bootcampService.findBootcamp(bootcampId);
        mybootcampService.upVote(findCamp, member, vote);
        return new ResponseEntity(HttpStatus.OK);
    }

}
