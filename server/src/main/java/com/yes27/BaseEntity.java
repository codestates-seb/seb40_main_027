package com.yes27;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

    //데이터 생성 날짜를 자동으로 주입
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    // 데이터 수정 날짜를 자동으로 주입
    @LastModifiedDate
    private LocalDateTime updatedAt;
}
