package com.yes27.bootcamp.mapper;

import com.yes27.bootcamp.dto.BootcampDto;

import com.yes27.bootcamp.entity.BootCamp;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BootcampMapper {

    BootCamp bootPatchDtoToBootcamp(BootcampDto.Patch patchDto);
    //수정
    BootcampDto.PatchResponse bootcampToBootPatchResponseDto(BootCamp bootcamp);
    //상세조회
    BootcampDto.DetailResponseDto bootcampTobootCampDetailResponseDto(BootCamp bootCamp);

    //전체조회
    List<BootcampDto.Response> bootcampToBootcampResponsesDto(List<BootCamp> bootcamps);

}