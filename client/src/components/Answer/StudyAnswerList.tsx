import axios from 'axios';
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useRef, useState, useMemo, KeyboardEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { answerListData } from '../../atoms/index';
import * as S from './AnswerListView.style';
import { Icon } from '@iconify/react';

const AnswerTextContent = styled.div`
  border-bottom: 1px solid black;
`;

interface studyAnswerListProps {
  createdAt?: string;
  studyCommentId: number;
  studyComment: string;
  updatedAt?: string;
  nickname: string;
}

const StudyAnswerList = ({ createdAt, studyCommentId, updatedAt, studyComment, nickname }: studyAnswerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState('');
  const [answerList, setAnswerList] = useRecoilState(answerListData);
  console.log(studyComment);
  const { id } = useParams();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
          ['image', 'video'],
        ],
        handlers: {},
      },
    }),
    []
  );

  const editHandler = () => {
    setIsPatch(!isPatch);
  };

  const patchComment = () => {
    return axios({
      method: 'patch',
      url: `/study/${id}/comment/${studyCommentId}`,
      data: { postscriptComment: commentValue },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    });
  };

  const deleteComment = () => {
    return axios({
      method: 'delete',
      url: `/study/${id}/comment/${studyCommentId}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    })
      .then(() => {})
      .catch(() => console.log('err'));
  };

  const patchAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const patchAwait = await patchComment();
      const getAwait = await getComment('study', `${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const deleteAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const deleteAwait = await deleteComment();
      const getAwait = await getComment('study', `${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const PatchHanlder = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //수정에서 403오류 발생
    patchAsync();
    setIsPatch(!isPatch);
  };

  const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteAsync();
  };

  return (
    <S.AnswerTextContent>
      {isPatch ? (
        <div>
          <ReactQuill theme="snow" value={commentValue} onChange={setCommentValue} />
          <S.ButtonArea>
            <S.OkButton onClick={PatchHanlder}>완료</S.OkButton>
            <S.OkButton color={'red'} onClick={editHandler}>
              취소
            </S.OkButton>
          </S.ButtonArea>
        </div>
      ) : (
        <div>
          <div>
            <S.UserAnswerInfo>
              <S.TimeOrName>
                <S.NameZone>
                  <Icon icon="carbon:user-avatar-filled-alt" width="20" height="15" />
                  {nickname}
                </S.NameZone>
                <span>{updatedAt ? <span>{createdAt}</span> : createdAt} </span>
              </S.TimeOrName>

              <div>
                <S.AnswerButton onClick={editHandler}>수정</S.AnswerButton>
                <S.AnswerButton color="red" onClick={deleteHandler}>
                  삭제
                </S.AnswerButton>
              </div>
            </S.UserAnswerInfo>
            <S.TextArea
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(studyComment),
              }}
            />
          </div>
        </div>
      )}
    </S.AnswerTextContent>
  );
};

export default StudyAnswerList;
