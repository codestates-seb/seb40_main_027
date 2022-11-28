package com.yes27.bootcamp.service;

import com.yes27.bootcamp.entity.BootCamp;
import com.yes27.bootcamp.entity.Mybootcamp;
import com.yes27.bootcamp.repository.BootcampRepository;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BootcampService {

    private final BootcampRepository bootcampRepository;

    public BootcampService(BootcampRepository bootcampRepository) {
        this.bootcampRepository = bootcampRepository;
    }

    public BootCamp update(BootCamp bootCamp, Long bootcampId){
        BootCamp findCamp = findBootcamp(bootcampId);
//        BootCamp findCamp = findVerifiedBootCamp(bootCamp.getBootcampId());
        findCamp.setDuration(findCamp.getDuration());
        findCamp.setBeginRegisterDate(findCamp.getBeginRegisterDate());
        findCamp.setFinalRegisterDate(findCamp.getFinalRegisterDate());
        findCamp.setSite(findCamp.getSite());
        findCamp.setOnOff(findCamp.getOnOff());
        findCamp.setProcess(findCamp.getProcess());
        findCamp.setSatisfaction(findCamp.getSatisfaction());
        findCamp.setEndDate(findCamp.getEndDate());
        findCamp.setSuperviser(findCamp.getSuperviser());
        findCamp.setTotalCost(findCamp.getTotalCost());
        findCamp.setTitle(findCamp.getTitle());
        findCamp.setTrTime(findCamp.getTrTime());
        findCamp.setStartDate(findCamp.getStartDate());
        findCamp.setWeekendStatus(findCamp.getWeekendStatus());

        return bootcampRepository.save(findCamp);
    }
    public Page<BootCamp> findBootcamps(int page, int size){
        return bootcampRepository.findAll(PageRequest.of(page,size, Sort.by("bootcampId").descending()));
    }

    public Page<BootCamp> findBootscamp(int page, int size, String sort){
        return bootcampRepository.findAll(PageRequest.of(page, size, Sort.by(sort).descending()));
    }

    public BootCamp findBootcamp(Long bootcampId){
       BootCamp findCamp = findVerifiedBootCamp(bootcampId);
       return findCamp;
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



}
