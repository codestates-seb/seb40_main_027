package com.yes27.postscript.entity;

import com.yes27.BaseEntity;
import com.yes27.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class PostscriptVote extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postscriptVoteId;

    @Column(nullable = false)
    private int vote;

    @Column(nullable = false)
    private int totalVotes;

    @ManyToOne
    @JoinColumn(name = "POSTSCRIPT")
    private Postscript postscript;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addPostscript(Postscript postscript) {
        if (this.postscript == null && postscript != null)
            this.postscript = postscript;
    }

    // 유저에 해당하는 컬럼 매핑
    public void addMember(Member member) {
        if (this.member == null && member != null)
            this.member = member;
    }
}
