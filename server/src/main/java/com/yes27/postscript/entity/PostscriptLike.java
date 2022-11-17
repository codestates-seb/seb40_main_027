package com.yes27.postscript.entity;

import com.yes27.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class PostscriptLike extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscriptLikeId;

    @Column
    private int PostLike = 0;

    @ManyToOne
    @JoinColumn(name ="POSTSCRIPT_ID")
    private Postscript postscript;

    public void addPostscript(Postscript postscript){
        if(this.postscript == null && postscript != null)
            this.postscript = postscript;
    }

    // 유저에 해당하는 컬럼 매핑, 추가 기능 구현하기
}
