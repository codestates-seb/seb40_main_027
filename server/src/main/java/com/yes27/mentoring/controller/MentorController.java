package com.yes27.mentoring.controller;



import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.member.service.MemberService;
import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.mapper.MentorMapper;
import com.yes27.mentoring.service.MentorService;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/mentoring")
@Validated
public class MentorController {

    private final MentorService mentorService;
    private final MemberService memberService;

    private final MentorMapper mapper;

    public MentorController(MentorService mentorService, MemberService memberService, MentorMapper mapper) {
        this.mentorService = mentorService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity addMentor(@Valid @RequestBody MentorDto.Post mentorDto,
                                    HttpServletRequest request){
        Member member = memberService.findMember(request);
        Mentor mentor = mapper.mentorPostDtoToMentor(mentorDto);
        MentorDto.MentoringResponse response = mapper.mentorToMentoringResponseDto(mentorService.create(mentor,member));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{mentorId}")
    public ResponseEntity updateMentor(@PathVariable("mentorId") @Positive long mentorId,
                                       @Valid @RequestBody MentorDto.Patch mentorPatchDto,
                                        HttpServletRequest request){
        Member member = memberService.findMember(request);
        Mentor mentor = mapper.mentorPatchDtoToMentor(mentorPatchDto);
        mentor.setMentoringId(mentorId);
        MentorDto.MentoringResponse response = mapper.mentorToMentoringResponseDto(mentorService.update(mentor, member));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //게시글 상세조회
    @GetMapping("/{mentorId}")
    public ResponseEntity getMentor(@PathVariable("mentorId") @Positive long mentorId,
                                    HttpServletRequest request){
        MentorDto.MentorsResponse response = null;
        try {
            String email = request.getUserPrincipal().getName();
            Member member = memberService.findVerifiedMemberByEmail(email);
            response = mapper.mentoringToMentoringDetailsResponse(mentorService.isVote(mentorId, member));
        }catch(NullPointerException e){
            response = mapper.mentoringToMentoringDetailsResponse(mentorService.findMentor(mentorId));
        }
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //전체 게시글 조회(최신순 정렬)
    @GetMapping
    public ResponseEntity getMentors(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size,
                                     @RequestParam(required = false) String sort){
        if(sort==null) {
            Page<Mentor> pageMentors = mentorService.findMentors(page - 1, size);
            List<Mentor> mentors = pageMentors.getContent();
            return new ResponseEntity(new MultiResponseDto<>(mapper.mentorsToMentorResponseDtos(mentors),pageMentors),HttpStatus.OK);
        }
        Page<Mentor> pageMentors = mentorService.findMentors(page - 1, size , sort);
        List<Mentor> mentors = pageMentors.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.mentorsToMentorResponseDtos(mentors),pageMentors),HttpStatus.OK);
    }

    @DeleteMapping("/{mentorId}")
    public ResponseEntity deleteMentor(@PathVariable("mentorId") long mentorId, HttpServletRequest request){
        Member member = memberService.findMember(request);
        mentorService.delete(mentorId, member);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
