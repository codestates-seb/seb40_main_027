package com.yes27.mentoring.controller;



import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.mapper.MentorMapper;
import com.yes27.mentoring.service.MentorService;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/mentoring")
@Validated
public class MentorController {

    private final MentorService mentorService;

    private final MentorMapper mapper;

    public MentorController(MentorService mentorService, MentorMapper mapper) {
        this.mentorService = mentorService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity addMentor(@Valid @RequestBody MentorDto.Post mentorDto){

        Mentor mentor = mapper.mentorPostDtoToMentor(mentorDto);
        MentorDto.Response response = mapper.mentorToMentorResponseDto(mentorService.create(mentor));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{mentorId}")
    public ResponseEntity updateMentor(@PathVariable("mentorId") @Positive long mentorId,
                                       @Valid @RequestBody MentorDto.Patch mentorPatchDto){
        Mentor mentor = mapper.mentorPatchDtoToMentor(mentorPatchDto);

        MentorDto.Response response = mapper.mentorToMentorResponseDto(mentorService.update(mentorId,mentor));

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //게시글 상세조회
    @GetMapping("/{mentorId}")
    public ResponseEntity getMentor(@PathVariable("mentorId") @Positive long mentorId){
        MentorDto.MentorsResponse response = mapper.mentoringToMentoringDetailsResponse(mentorService.findMentor(mentorId));
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //전체 게시글 조회
    @GetMapping
    public ResponseEntity getMentors(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Mentor> pageMentors = mentorService.findMentors(page-1,size);
        List<Mentor> mentors = pageMentors.getContent();


        return new ResponseEntity(new MultiResponseDto<>(mapper.mentorsToMentorResponseDtos(mentors),pageMentors),HttpStatus.OK);
    }

    @DeleteMapping("/{mentorId}")
    public ResponseEntity deleteMentor(@PathVariable("mentorId") long mentorId){
        mentorService.delete(mentorId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
