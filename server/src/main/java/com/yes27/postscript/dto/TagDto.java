package com.yes27.postscript.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class TagDto {

    @NotBlank(message = "부트캠프 선택 및 후기, 조언")
    private String tagName;

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof TagDto) {
            TagDto tagDto = (TagDto) obj;
            return tagDto.tagName.equals(tagName);
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return tagName.hashCode();
    }

}
