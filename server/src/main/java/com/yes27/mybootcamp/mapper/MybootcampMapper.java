package com.yes27.mybootcamp.mapper;


import com.yes27.bootcamp.dto.BootcampDto;
import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.member.entity.Member;
import com.yes27.mybootcamp.dto.MybootcampDto;
import com.yes27.mybootcamp.entity.Mybootcamp;
import com.yes27.mybootcamp.entity.MybootcampMapping;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MybootcampMapper {

    default List<BootcampDto.Response> bootcampToMyBootcampResponse(List<MybootcampMapping> bootCamps){
        return bootCamps.stream()
                .map(mybootcamp -> BootcampDto.Response
                        .builder()
                        .bootcampId(mybootcamp.getbootCamp().getBootcampId())
                        .totalCost(mybootcamp.getbootCamp().getTotalCost())
                        .title(mybootcamp.getbootCamp().getTitle())
                        .process(mybootcamp.getbootCamp().getProcess())
                        .onOff(mybootcamp.getbootCamp().getOnOff())
                        .beginRegisterDate(mybootcamp.getbootCamp().getBeginRegisterDate())
                        .finalRegisterDate(mybootcamp.getbootCamp().getFinalRegisterDate())
                        .build())
                .collect(Collectors.toList());
    }

}
