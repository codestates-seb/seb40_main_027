package com.yes27.bootcamp.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class BootCamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bootcampId;

    // 훈련기관명(코드스테이츠)
    private String title;

    //훈련 과정명
    private String process;

    //접수일
    private String beginRegisterDate;

    //접수마감일
    private String finalRegisterDate;

    //개강일
    private String startDate;

    //종강일
    private String endDate;

    //기간
    private String duration;

    //주관부처
    private String superviser;

    //온/오프라인
    private String onOff;

    //시간
    private String trTime;

    //주야구분/ 주말여부
    private String weekendStatus;

    //총 비용
    private String totalCost;

    //링크
    @Column(columnDefinition = "Text")
    private String site;

    //수강만족도
    private String satisfaction;

    //주소
    private String address;

    //정원
    private String yardMan;




}
