package com.yes27.mybootcamp.mapper;


import com.yes27.bootcamp.dto.BootcampDto;
import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;
import com.yes27.mybootcamp.dto.MybootcampDto;
import com.yes27.mybootcamp.entity.Mybootcamp;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MybootcampMapper {

    default List<BootcampDto.Response> bootcampToMyBootcampResponse(List<BootCamp> bootCamps){
        return bootCamps.stream()
                .map(mybootcamp -> BootcampDto.Response
                        .builder()
                        .bootcampId(mybootcamp.getBootcampId())
                        .totalCost(mybootcamp.getTotalCost())
                        .title(mybootcamp.getTitle())
                        .process(mybootcamp.getProcess())
                        .onOff(mybootcamp.getOnOff())
                        .beginRegisterDate(mybootcamp.getBeginRegisterDate())
                        .finalRegisterDate(mybootcamp.getFinalRegisterDate())
                        .build())
                .collect(Collectors.toList());
    }

}
