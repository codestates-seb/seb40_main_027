package com.yes27.member.service;

import com.yes27.auth.utils.CustomAuthorityUtils;
import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.member.dto.MemberDto;
import com.yes27.member.entity.Member;
import com.yes27.member.repository.MemberRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository,
        ApplicationEventPublisher publisher,
        PasswordEncoder passwordEncoder,
        CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(Member member, MemberDto.Patch patchDto) {
        verifyExistsEmail(patchDto.getEmail());

        Optional.ofNullable(patchDto.getEmail()).ifPresent(email -> member.setEmail(email));
        Optional.ofNullable(patchDto.getNickname()).ifPresent(nickname -> member.setNickname(nickname));
        Optional.ofNullable(patchDto.getPassword()).ifPresent(password -> member.setPassword(passwordEncoder.encode(password)));

        return memberRepository.save(member);
    }

    public void deleteMember(Member member) {
        memberRepository.delete(member);
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    // 이메일로 멤버 찾음
    public Member findVerifiedMemberByEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }
}
