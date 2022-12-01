import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/api/getApi';
import { useRecoilState } from 'recoil';
import { mentoringListData } from '../../atoms/index';
import MentoringAnswerList from './MentoringAnswerList';
import * as S from './ForumAnswer.style';

interface mentoringAnswerListProps {
  createdAt: string;
  mentoringCommentId: number;
  mentoringComment: string;
  updatedAt: string;
  nickname: string;
}

export interface MentoringanswerList extends Array<mentoringAnswerListProps> {}

const MentoringAnswer = () => {
  const { id } = useParams();
  const [mentoringAnswerContents, setMentoringnAnswerContents] = useState('');
  const [mentoringanswerList, setMentoringAnswerList] = useRecoilState(mentoringListData);
  const access = localStorage.getItem('access');

  const postComment = () => {
    return axios({
      method: 'post',
      url: `/mentoring/${id}/comment`,
      data: { mentoringComment: mentoringAnswerContents },
      headers: {
        Authorization: access,
      },
    });
  };

  const AsyncFunction = async () => {
    axios.defaults.withCredentials = true;
    try {
      await postComment();
      const getAwait = await getComment('mentoring', `${id}`);
      setMentoringAnswerList(getAwait.data.data.mentoringComments);
    } catch {
      console.log('err');
    }
  };

  const SummitAnswerBtn = () => {
    AsyncFunction();
    setMentoringnAnswerContents('');
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'get',
      url: `/mentoring/${id}`,
    }).then((res) => {
      const { data } = res;
      setMentoringAnswerList(data.data.mentoringComments);
    });
  }, []);

  return (
    <>
      <S.ViewAnswer>
        {mentoringanswerList?.map((list, idx) => (
          <MentoringAnswerList
            key={idx}
            createdAt={list.createdAt}
            mentoringCommentId={list.mentoringCommentId}
            mentoringComment={list.mentoringComment}
            updatedAt={list.updatedAt}
            nickname={list.nickname}
          ></MentoringAnswerList>
        ))}
      </S.ViewAnswer>
      <S.QuillContent>
        <S.QuillArea theme="snow" value={mentoringAnswerContents} onChange={(e) => setMentoringnAnswerContents(e)} />
        <div className="btn-area">
          <S.SubmitButtton onClick={SummitAnswerBtn}>등록</S.SubmitButtton>
        </div>
      </S.QuillContent>
    </>
  );
};

export default MentoringAnswer;
