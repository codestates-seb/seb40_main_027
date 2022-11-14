package com.yes27.postscript.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class PostscriptTagDto {

    @NotBlank(message = "부트캠프 선택 및 후기, 조언")
    private String tagName;
}
