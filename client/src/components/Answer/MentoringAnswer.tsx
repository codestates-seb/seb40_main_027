import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState } from 'recoil';
import { mentoringListData } from '../../atoms/index';
import MentoringAnswerList from './MentoringAnswerList';
import * as S from './ForumAnswer.style';

interface mentoringAnswerListProps {
  createdAt: string;
  commentId: number;
  mentoringComment: string;
  updatedAt: string;
  nickname: string;
}

export interface MentoringanswerList extends Array<mentoringAnswerListProps> {}

const MentoringAnswer = () => {
  const { id } = useParams();
  const [studyAnswerContents, setStudynAnswerContents] = useState('');
  const [studyanswerList, setStudyAnswerList] = useRecoilState(mentoringListData);

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

  const postComment = () => {
    return axios({
      method: 'post',
      url: `/mentoring/${id}/comment`,
      data: { mentoringComment: studyAnswerContents },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    });
  };

  const AsyncFunction = async () => {
    axios.defaults.withCredentials = true;
    try {
      const postAwait = await postComment();
      const getAwait = await getComment('mentoring', `${id}`);
      setStudyAnswerList(getAwait.data.data.comments);
    } catch {
      console.log('err');
    }
  };

  const SummitAnswerBtn = () => {
    AsyncFunction();
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'get',
      url: `/mentoring/${id}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    }).then((res) => {
      const { data } = res;

      setStudyAnswerList(data.data.comments);
    });
  }, []);

  return (
    <>
      <S.ViewAnswer>
        {studyanswerList?.map((list, idx) => (
          <MentoringAnswerList
            key={idx}
            createdAt={list.createdAt}
            commentId={list.commentId}
            mentoringComment={list.mentoringComment}
            updatedAt={list.updatedAt}
            nickname={list.nickname}
          ></MentoringAnswerList>
        ))}
      </S.ViewAnswer>
      <S.QuillContent>
        <S.QuillArea theme="snow" value={studyAnswerContents} onChange={(e) => setStudynAnswerContents(e)} />
        <div className="btn-area">
          <S.SubmitButtton onClick={SummitAnswerBtn}>등록</S.SubmitButtton>
        </div>
      </S.QuillContent>
    </>
  );
};

export default MentoringAnswer;
