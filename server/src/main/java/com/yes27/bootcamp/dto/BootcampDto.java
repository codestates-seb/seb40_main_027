package com.yes27.bootcamp.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class BootcampDto {

    @Getter
    @Setter
    @Builder
    public static class Response{

        private Long bootcampId;
        //기관
        private String title;
        //접수일
        private String beginRegisterDate;
        //접수마감일
        private String finalRegisterDate;
        //과정
        private String process;
        //총비용
        private String totalCost;
        //온/오프라인
        private String onOff;
    }

    //상세 조회
    @Getter
    @Setter
    public static class DetailResponseDto{
        private Long bootcampId;
        //모집기간
        private String beginRegisterDate;

        private String finalRegisterDate;
        //공부기간
        private String duration;
        //온 오프라인
        private String onOff;
        //상세 조회
        private String process;
        //총 비용
        private String totalCost;
        //주관 부처
        private String superviser;
        //만족도

        private String satisfaction;
        //시간
        private String trTime;
        //사이트
        private String site;
        //주야구분
        private String weekendStatus;
        //훈련기간
        private String startDate;
        private String endDate;

        //좋아요 유무
        private int vote;
    }

    @Getter
    @Setter
    public static class Patch{

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
        private String site;

        //수강만족도
        private String satisfaction;

        //주소
        private String address;

        //모집정원
        private String yardMan;
    }

    @Getter
    @Setter
    public static class PatchResponse{
        private Long bootcampId;
    }
}
