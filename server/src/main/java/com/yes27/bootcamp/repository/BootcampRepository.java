package com.yes27.bootcamp.repository;

import com.yes27.bootcamp.entity.BootCamp;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.*;
import java.time.LocalDate;
import java.util.List;

public interface BootcampRepository extends JpaRepository<BootCamp, Long> {

    List<BootCamp> findAllByFinalRegisterDateLessThanEqual(LocalDate now);
}
