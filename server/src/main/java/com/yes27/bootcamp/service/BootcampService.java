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

        Optional.ofNullable(bootCamp.getDuration())
                .ifPresent(duration -> findCamp.setDuration(duration));
        Optional.ofNullable(bootCamp.getBeginRegisterDate()).
                ifPresent(beginRegisterDate->findCamp.setBeginRegisterDate(beginRegisterDate));
        Optional.ofNullable(bootCamp.getFinalRegisterDate())
                        .ifPresent(finalRegisterDate->findCamp.setFinalRegisterDate(finalRegisterDate));
        Optional.ofNullable(bootCamp.getSite())
                        .ifPresent(site -> findCamp.setSite(site));
        Optional.ofNullable(bootCamp.getOnOff())
                        .ifPresent(onOff ->findCamp.setOnOff(onOff));
        Optional.ofNullable(bootCamp.getProcess())
                        .ifPresent(process -> findCamp.setProcess(process));
        Optional.ofNullable(bootCamp.getSatisfaction())
                        .ifPresent(satisfaction->findCamp.setSatisfaction(satisfaction));
        Optional.ofNullable(bootCamp.getEndDate())
                        .ifPresent(endDate -> findCamp.setEndDate(endDate));
        Optional.ofNullable(bootCamp.getSuperviser())
                        .ifPresent(superviser->findCamp.setSuperviser(superviser));
        Optional.ofNullable(bootCamp.getTotalCost())
                        .ifPresent(totalCost->findCamp.setTotalCost(totalCost));
        Optional.ofNullable(bootCamp.getTitle())
                        .ifPresent(title->findCamp.setTitle(title));
        Optional.ofNullable(bootCamp.getTrTime())
                        .ifPresent(trTime->findCamp.setTrTime(trTime));
        Optional.ofNullable(bootCamp.getStartDate())
                        .ifPresent(startDate->findCamp.setStartDate(startDate));
        Optional.ofNullable(bootCamp.getWeekendStatus())
                        .ifPresent(weekendStatus->findCamp.setWeekendStatus(weekendStatus));
        Optional.ofNullable(bootCamp.getYardMan())
                        .ifPresent(yardMan->findCamp.setYardMan(yardMan));
        Optional.ofNullable(bootCamp.getAddress())
                        .ifPresent(address -> findCamp.setAddress(address));

        return bootcampRepository.save(findCamp);
    }
    public Page<BootCamp> findBootcamps(int page, int size){
//        updateDate();
        return bootcampRepository.findAll(PageRequest.of(page,size, Sort.by("bootcampId").descending()));
    }

    public Page<BootCamp> findBootscamp(int page, int size, String sort){
        if(sort.equals("finalRegisterDate")){
            return bootcampRepository.findAllByBeginRegisterDate("모집중",PageRequest.of(page, size, Sort.by(sort).ascending()));
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
