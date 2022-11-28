package com.yes27.bootcamp.service;


import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.entity.Mybootcamp;
import com.yes27.bootcamp.repository.BootcampRepository;
import com.yes27.bootcamp.repository.MybootcampRepository;
import com.yes27.member.entity.Member;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MybootcampService {
    private final MybootcampRepository mybootcampRepository;
    private final BootcampService bootcampService;
    List<String> mybootCampList = new ArrayList<>();

    public MybootcampService(MybootcampRepository mybootcampRepository, BootcampService bootcampService) {
        this.mybootcampRepository = mybootcampRepository;
        this.bootcampService = bootcampService;

    }

    //좋아요
    public Mybootcamp findVote(BootCamp bootCamp, Member member){
        //게시글 존재하는지 검사
        Optional<Mybootcamp> optionalVote = mybootcampRepository.findByBootCampAndMember(bootCamp, member);

        Mybootcamp findVote = optionalVote.orElseGet(()->new Mybootcamp());

        return findVote;


    }

    public Mybootcamp upVote(BootCamp bootCamp, Member member){
        Mybootcamp findVote = findVote(bootCamp,member);
        if(findVote.getVote() == null){
            findVote.setVote(true);
        }
        else if(findVote.getVote() == false){
            findVote.setVote(true);
        }
        else{
            findVote.setVote(false);
        }
       findVote.setMember(member);
       findVote.setBootCamp(bootCamp);
      return mybootcampRepository.save(findVote);

    }

//    public List<BootCamp> getvotes(Member member){
//        //member를 찾고
//        List<Mybootcamp> myList = mybootcampRepository.findAllByMember(member);
//        //좋아요 클릭한 게시글 id를 저장
//        List<BootCamp> myLists = myList.stream().map(Mybootcamp::getBootCamp).collect(Collectors.toList());
//        for(int i = 0; i<myLists.size(); i++){
//            BootCamp findboot =bootcampService.findBootcamp(myLists.get(i).getBootcampId());
//            mybootCampList.add(findboot);
//        }
//
//        return mybootCampList;
//    }
}
