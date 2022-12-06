package com.yes27.mybootcamp.dto;

import com.yes27.bootcamp.dto.BootcampDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class MybootcampDto {

    @Getter
    @Setter
    @Builder
    public static class Response {
        private List<BootcampDto.Response> mybootcamp;
    }
}
