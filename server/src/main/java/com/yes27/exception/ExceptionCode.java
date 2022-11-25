package com.yes27.exception;

import lombok.Getter;

public enum ExceptionCode {
    STUDY_NOT_FOUND(404, "Study not found"),
    STUDY_EXISTS(409, "Study exists"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),

    POSTSCRIPT_NOT_FOUND(404, "Postscript not found"),
    POSTSCRIPT_EXISTS(409, "Postscript exists"),

    COMMENT_NOT_FOUND(404, "Comment not found"),
    TAG_EXIST(409, "Postscript exists"),

    MENTOR_NOT_FOUND(404, "Mentor not found"),
    MENTOR_EXISTS(409, "Mentor exists"),

    ACCESS_DENIED_MEMBER(403, "Access Denied Member"),

    TOKEN_NOT_FOUND(404, "Token not found"),

    EMAIL_EXISTS(409, "Email exists"),

    PERMISSION_ERROR(410, "Permission does not exist"),
    VOTE_ERROR(410, "vote Should have to be 0 or 1"),

    EMAIL_NOT_EXISTS(500, "Email not exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
