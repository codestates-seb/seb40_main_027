package com.yes27.bootcamp.service;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.repository.BootcampRepository;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.entity.Member;
import com.yes27.mybootcamp.entity.Mybootcamp;
import com.yes27.mybootcamp.repository.MybootcampRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BootcampService {

    private final BootcampRepository bootcampRepository;

    private final MybootcampRepository mybootcampRepository;

    public BootcampService(BootcampRepository bootcampRepository, MybootcampRepository mybootcampRepository) {
        this.bootcampRepository = bootcampRepository;
        this.mybootcampRepository = mybootcampRepository;
    }

    public BootCamp update(BootCamp bootCamp){
        BootCamp findCamp = findBootcamp(bootCamp.getBootcampId());

        Optional.ofNullable(findCamp.getDuration())
                .ifPresent(duration -> bootCamp.setDuration(duration));
        Optional.ofNullable(findCamp.getBeginRegisterDate()).
                ifPresent(beginRegisterDate->bootCamp.setBeginRegisterDate(beginRegisterDate));
        Optional.ofNullable(findCamp.getFinalRegisterDate())
                        .ifPresent(finalRegisterDate->bootCamp.setFinalRegisterDate(finalRegisterDate));
        Optional.ofNullable(findCamp.getSite())
                        .ifPresent(site -> bootCamp.setSite(site));
        Optional.ofNullable(findCamp.getOnOff())
                        .ifPresent(onOff ->bootCamp.setOnOff(onOff));
        Optional.ofNullable(findCamp.getProcess())
                        .ifPresent(process -> bootCamp.setProcess(process));
        Optional.ofNullable(findCamp.getSatisfaction())
                        .ifPresent(satisfaction->bootCamp.setSatisfaction(satisfaction));
        Optional.ofNullable(findCamp.getEndDate())
                        .ifPresent(endDate -> bootCamp.setEndDate(endDate));
        Optional.ofNullable(findCamp.getSuperviser())
                        .ifPresent(superviser->bootCamp.setSuperviser(superviser));
        Optional.ofNullable(findCamp.getTotalCost())
                        .ifPresent(totalCost->bootCamp.setTotalCost(totalCost));
        Optional.ofNullable(findCamp.getTitle())
                        .ifPresent(title->bootCamp.setTitle(title));
        Optional.ofNullable(findCamp.getTrTime())
                        .ifPresent(trTime->bootCamp.setTrTime(trTime));
        Optional.ofNullable(findCamp.getStartDate())
                        .ifPresent(startDate->bootCamp.setStartDate(startDate));
        Optional.ofNullable(findCamp.getWeekendStatus())
                        .ifPresent(weekendStatus->bootCamp.setWeekendStatus(weekendStatus));
        Optional.ofNullable(findCamp.getYardMan())
                        .ifPresent(yardMan->bootCamp.setYardMan(yardMan));
        Optional.ofNullable(findCamp.getAddress())
                        .ifPresent(address -> bootCamp.setAddress(address));

        return bootcampRepository.save(findCamp);
    }
    public Page<BootCamp> findBootcamps(int page, int size){
//        updateDate();
        return bootcampRepository.findAll(PageRequest.of(page,size, Sort.by("bootcampId").descending()));
    }

    public Page<BootCamp> findBootscamp(int page, int size, String sort){
        if(sort.equals("finalRegisterDate")){
            return bootcampRepository.findAll(PageRequest.of(page, size, Sort.by(sort).ascending()));
        }
        return bootcampRepository.findAll(PageRequest.of(page, size, Sort.by(sort).descending()));
    }

    public BootCamp findBootcamp(Long bootcampId){
       BootCamp findCamp = findVerifiedBootCamp(bootcampId);

       return findCamp;
    }
    // 좋아요 유무
    public int isVote(Long bootcampId, Member member){
        BootCamp findCamp = findBootcamp(bootcampId);
        Optional<Mybootcamp> isVote = mybootcampRepository.findByBootCampAndMember(findCamp,member);
        if(isVote.isPresent()){
            return isVote.get().getVote();
        }else{
            return 0;
        }
    }

    public BootCamp findVerifiedBootCamp(Long bootcampId) {
        Optional<BootCamp> optionalCamp = bootcampRepository.findById(bootcampId);
        if(optionalCamp.isPresent()){
            return optionalCamp.get();
        }else {
            throw new BusinessLogicException(ExceptionCode.BOOTCAMP_NOT_FOUND);
        }
    }

    public void delete(Long bootCampId){
        BootCamp findCamp = findVerifiedBootCamp(bootCampId);
        bootcampRepository.delete(findCamp);
    }

    //beginRegister상태변경하기
//    public void updateDate(){
//        List<BootCamp> findList = bootcampRepository.findAllByFinalRegisterDateLessThanEqual(LocalDate.now());
//        List<BootCamp> updateCamp = new ArrayList<>();
//        for(int i = 0 ; i<findList.size(); i++){
//            BootCamp findCamp = findBootcamp(findList.get(i).getBootcampId());
//           findCamp.setBeginRegisterDate("모집마감");
//           updateCamp.add(i,findCamp);
//        }
//        bootcampRepository.saveAll(updateCamp);
//    }


}
