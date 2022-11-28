package com.yes27.bootcamp.repository;

import com.yes27.bootcamp.entity.BootCamp;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.*;

public interface BootcampRepository extends JpaRepository<BootCamp, Long> {
}
