package com.yes27.mybootcamp.service;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.service.BootcampService;
import com.yes27.member.entity.Member;
import com.yes27.mybootcamp.entity.Mybootcamp;
import com.yes27.mybootcamp.repository.MybootcampRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MybootcampService {
    private final MybootcampRepository mybootcampRepository;
    private final BootcampService bootcampService;

    public MybootcampService(MybootcampRepository mybootcampRepository, BootcampService bootcampService) {
        this.mybootcampRepository = mybootcampRepository;
        this.bootcampService = bootcampService;
    }

    public Mybootcamp findVote(BootCamp bootCamp, Member member) {
        Optional<Mybootcamp> optionalVote = this.mybootcampRepository.findByBootCampAndMember(bootCamp, member);
        Mybootcamp findVote = (Mybootcamp)optionalVote.orElseGet(() -> {
            return new Mybootcamp();
        });
        return findVote;
    }

    public Mybootcamp upVote(BootCamp bootCamp, Member member, int vote) {
        Mybootcamp findVote = this.findVote(bootCamp, member);
        findVote.setVote(vote);
        findVote.setMember(member);
        findVote.setBootCamp(bootCamp);
        return (Mybootcamp)this.mybootcampRepository.save(findVote);
    }

    public List<BootCamp> getMybootcamp(Member member) {
        List<Mybootcamp> findBootcamp = this.mybootcampRepository.findAllByMemberAndVote(member, 1);
        List<BootCamp> myBootcamp = (List)findBootcamp.stream().map(Mybootcamp::getBootCamp).collect(Collectors.toList());
        return myBootcamp;
    }
}
