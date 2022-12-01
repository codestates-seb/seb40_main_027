package com.yes27.mentoringLike.mapper;


import com.yes27.mentoring.dto.MentorDto;
import com.yes27.mentoring.entity.Mentor;
import com.yes27.mentoringLike.dto.MentoringVoteDto;
import com.yes27.mentoringLike.dto.MentoringVoteDto.Response;
import com.yes27.mentoringLike.entity.MentoringVote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MentoringVoteMapper {


    default Response  mentoringToVoteResponseDto(MentoringVote mentoringVote){
        MentoringVoteDto.Response voteResponse = new MentoringVoteDto.Response();
        voteResponse.setVote(mentoringVote.getVote());
        voteResponse.setTotalVotes(mentoringVote.getTotalVotes());
        voteResponse.setMentoringId(mentoringVote.getMentor().getMentoringId());

        return voteResponse;
    }

}
