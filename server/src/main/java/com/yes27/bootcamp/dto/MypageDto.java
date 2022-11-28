package com.yes27.bootcamp.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class MypageDto {

    @Getter
    @Setter
    public static class Response {
        public List<BootcampDto.Response> myVote;
    }
}
