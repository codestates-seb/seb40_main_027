package com.yes27.postscript.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import com.yes27.postscripcomment.entity.PostscriptComment;
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

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 좋아요값들
    @Column(length = 5, nullable = false)
    private Integer votes = 0;

    // 조회수
    @Column(length = 5, nullable = false)
    private Integer view = 0;

    @OneToMany(mappedBy = "postscript", cascade = CascadeType.PERSIST) //좋아요
    private List<PostscriptVote> postscriptVotes = new ArrayList<>();

    @OneToMany(mappedBy = "postscript", cascade = CascadeType.ALL, orphanRemoval = true)  // 댓글 추가
    private List<PostscriptComment> postComments = new ArrayList<>();

    @OneToMany(mappedBy = "postscript", cascade = CascadeType.PERSIST) //태그
    private List<Tag> tags = new ArrayList<>();

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


