package com.yes27.mentoringcomment.controller;

import com.yes27.mentoringcomment.dto.CommentDto;
import com.yes27.mentoringcomment.entity.Comment;
import com.yes27.mentoringcomment.mapper.CommentMapper;
import com.yes27.mentoringcomment.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/mentoring/{mentoringId}/comment")
public class CommentController {

    private final CommentService commentService;

    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity addComment(@PathVariable("mentoringId") @Positive long mentoringId,
                                     @Valid @RequestBody CommentDto.Post commentPostDto){
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        CommentDto.Response response = mapper.commentToCommentResponseDto(commentService.create(mentoringId,comment));

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity updateComment(@PathVariable("commentId") @Positive long commentId,
                                     @PathVariable("mentoringId") @Positive long mentoringId,
                                     @RequestBody CommentDto.Patch commentPatchDto){
        Comment comment = mapper.commentPatchDtoToComment(commentPatchDto);
        CommentDto.Response response = mapper.commentToCommentResponseDto(commentService.update(mentoringId,comment,commentId));

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/{commentId}")
    public ResponseEntity getComment(@PathVariable("commentId") @Positive long commentId,
                                        @PathVariable("mentoringId") long mentoringId){
        CommentDto.Response response = mapper.commentToCommentResponseDto(commentService.findComment(commentId));

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@PathVariable("mentoringId") @Positive long mentoringId,
                                        @PathVariable("commentId") @Positive long commentId){
        commentService.delete(commentId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
