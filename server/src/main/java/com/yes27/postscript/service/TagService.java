package com.yes27.postscript.service;

import com.yes27.exception.BusinessLogicException;
import com.yes27.exception.ExceptionCode;
import com.yes27.postscript.entity.Tag;
import com.yes27.postscript.repository.TagRepository;

import java.util.List;
import java.util.Optional;

public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag) {
        verifyExistTag(tag.getTagName());
        return tagRepository.save(tag);
    }

    public void verifyExistTag(String tagName) {
        Optional<Tag> findTag = tagRepository.findByTagName(tagName);
        if(findTag.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.TAG_EXIST);
        }
    }

    //유저관계 추가
}
