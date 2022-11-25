package com.yes27.mentoringLike.mapper;

import com.yes27.mentoringLike.dto.MentoringVoteDto;
import com.yes27.mentoringLike.entity.MentoringVote;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T22:21:20+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.16.1 (Azul Systems, Inc.)"
)
@Component
public class MentoringVoteMapperImpl implements MentoringVoteMapper {

    @Override
    public MentoringVoteDto.Response mentoringToVoteResponseDto(MentoringVote mentoringVote) {
        if ( mentoringVote == null ) {
            return null;
        }

        MentoringVoteDto.Response.ResponseBuilder response = MentoringVoteDto.Response.builder();

        if ( mentoringVote.getMetorVoteId() != null ) {
            response.metorVoteId( mentoringVote.getMetorVoteId() );
        }
        response.totalVotes( mentoringVote.getTotalVotes() );
        response.vote( mentoringVote.getVote() );

        return response.build();
    }
}
