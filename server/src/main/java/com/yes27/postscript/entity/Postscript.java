package com.yes27.postscript.entity;

import com.yes27.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Postscript extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscriptId; // 후기 생성 게시물 번호

    @Column(nullable = false, columnDefinition = "TEXT")
    private String postscriptTitle; // 후기 생성 게시글 제목

    @Column(nullable = false, columnDefinition = "TEXT")
    private String postscriptContent; // 후기 생성 게시글 내용

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private PostscriptStatus postscriptStatus = PostscriptStatus.POSTSCRIPT_EXIST;
//    @ManyToOne
//    @JoinColumn(name = "USER_ID")
//    private User USER_ID;

    @Column(length = 5, nullable = false)
    private Integer postscriptLike = 0;

    @Column(length = 5, nullable = false)
    private Integer postscriptView = 0;

    @OneToMany(mappedBy = "postscript", cascade = CascadeType.ALL, orphanRemoval = true)  // 댓글 추가
    private List<PostscriptComment> postComments = new ArrayList<>();

    public enum PostscriptStatus {
        POSTSCRIPT_EXIST("존재하는 후기"),
        POSTSCRIPT_NOT_EXIST("존재하지 않는 후기");

        @Getter
        private String status;

        PostscriptStatus(String status) {
            this.status = status;
        }
    }
}

