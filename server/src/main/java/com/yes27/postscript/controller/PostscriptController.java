package com.yes27.postscript.controller;

import com.yes27.auth.jwt.JwtTokenizer;
import com.yes27.member.entity.Member;
import com.yes27.member.mapper.MemberMapper;
import com.yes27.member.service.MemberService;
import com.yes27.postscript.dto.PostscriptDto;
import com.yes27.postscript.entity.Postscript;
import com.yes27.postscript.mapper.PostscriptMapper;
import com.yes27.postscript.repository.PostscriptRepository;
import com.yes27.postscript.service.PostscriptService;
import com.yes27.response.MultiResponseDto;
import com.yes27.response.SingleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin(origins = {"http://bootlamp.s3-website.ap-northeast-2.amazonaws.com",
    "http://ec2-3-38-21-95.ap-northeast-2.compute.amazonaws.com:8080"})
@RestController
@RequestMapping("/postscript")
@Validated
public class PostscriptController {

    private final PostscriptService postscriptService;
    private final PostscriptMapper postscriptMapper;
    private final MemberService memberService;
    private final MemberMapper memberMapper;


    public PostscriptController(PostscriptService postscriptService,
                                PostscriptMapper postscriptMapper,
                                MemberService memberService,
                                MemberMapper memberMapper) {

        this.postscriptService = postscriptService;
        this.postscriptMapper = postscriptMapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    /** 게시글 작성
     *
     * @param postscriptPostDto
     * @return
     */
    @PostMapping //선택 조언, 후기 글 게시
    public ResponseEntity postPostscript(@Valid @RequestBody PostscriptDto.Post postscriptPostDto) {


        Postscript postscript = postscriptService.createPostscript(
                postscriptMapper.postscriptPostDtoToPostscript(postscriptPostDto, memberService));

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptMapper.postscriptToPostscriptResponse2(postscript)), HttpStatus.CREATED);
    }

    /** 게시글 수정
     *
     * @param postscriptId
     * @param postscriptPatchDto
     * @return
     */
    @PatchMapping("/{postscript-Id}") //선택 조언, 후기 글 수정
    public ResponseEntity patchPostscript(@PathVariable("postscript-Id") @Positive long postscriptId,
                                          @Valid @RequestBody PostscriptDto.Patch postscriptPatchDto) {
        postscriptPatchDto.setPostscriptId(postscriptId);
        Postscript postscript = postscriptMapper.postscriptPatchDtoToPostscript(postscriptService, postscriptPatchDto, memberService, postscriptId);

        Postscript updatedPostscript = postscriptService.updatePostscript(postscript);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postscriptMapper.postscriptToPostscriptResponse2(updatedPostscript)), HttpStatus.OK);
    }

    /** 게시글 상세 조회_댓글내용 포함
     *
     * @param postscriptId
     * @param request
     * @return
     */
    @GetMapping("/{postscript-Id}") //특정 조언,후기 조회 -> 댓글 포함하고 작성한글 조회, 글 작성후 다시 보여주는 곳, 게시글 상세 조회
    public ResponseEntity getPostscript(@PathVariable("postscript-Id") @Positive long postscriptId,
                                        HttpServletRequest request) {
        PostscriptDto.PostscriptDetailResponse responseDto = null;
        try {
            String email = request.getUserPrincipal().getName();
            Member member = memberService.findVerifiedMemberByEmail(email);
            responseDto = postscriptMapper.postscriptToPostscriptDetailResponseDto(postscriptService.LoginView(postscriptId, member), memberMapper);
        } catch (NullPointerException e) {
            responseDto = postscriptMapper.postscriptToPostscriptDetailResponseDto(postscriptService.NotLoginView(postscriptId), memberMapper);
        }

        return new ResponseEntity<>(
                new SingleResponseDto<>(responseDto), HttpStatus.OK);
    }

    /** 게시글 전체 조회_sort로 기준 설정
     *
     * @param page
     * @param size
     * @param sort
     * @return
     */
    @GetMapping //작성된 전체 조언,후기 조회 -> 댓글 제외하고 조회되게
    public ResponseEntity getPostscripts(@Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                         @Positive @RequestParam(value = "size", defaultValue = "10") int size,
                                         @RequestParam(value = "sort") String sort) {
        if (sort == null) {
            Page<Postscript> pagePostscripts = postscriptService.findLatestPostscripts(page - 1, size);
            List<Postscript> postscripts = pagePostscripts.getContent();
            return new ResponseEntity<>(
                    new MultiResponseDto<>(postscriptMapper.postscriptsToPostscriptResponseDtos(postscripts, memberMapper), pagePostscripts), HttpStatus.OK);
        }

        Page<Postscript> pagePostscripts = postscriptService.findSortPostscripts(page - 1, size, sort);
        List<Postscript> postscripts = pagePostscripts.getContent();


        return new ResponseEntity<>(
                new MultiResponseDto<>(postscriptMapper.postscriptsToPostscriptResponseDtos(postscripts, memberMapper), pagePostscripts), HttpStatus.OK);
    }

    /** 게시글 삭제
     *
     * @param postscriptId
     * @return
     */

    @DeleteMapping("/{postscript-id}") //선택 조언, 후기 글 삭제
    public ResponseEntity deletePostscript(@PathVariable("postscript-id") @Positive long postscriptId) {
        Member member = memberService.getLoginMember();
        postscriptService.deletePostscript(postscriptId, member.getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
