package com.yes27.bootcamp.entity;


import com.yes27.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Mybootcamp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mybootcampId;

    //찜 유무
    private Boolean vote;

    //사용자 id
    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    //부트캠프 id
    @ManyToOne
    @JoinColumn(name = "BOOTCAMP_BOOTCAMPID")
    private BootCamp bootCamp;

}
