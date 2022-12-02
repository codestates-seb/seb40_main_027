import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/api/answerAPI';
import { useRecoilState } from 'recoil';
import { mentoringListData } from '../../atoms/index';
import MentoringAnswerList from './MentoringAnswerList';
import * as S from './ForumAnswer.style';

interface MentoringAnswerListProps {
  createdAt: string;
  mentoringCommentId: number;
  mentoringComment: string;
  updatedAt: string;
  nickname: string;
}

export interface MentoringAnswerList extends Array<MentoringAnswerListProps> {}

const MentoringAnswer = () => {
  const { id } = useParams();
  const [mentoringAnswerContents, setMentoringnAnswerContents] = useState('');
  const [mentoringAnswerList, setMentoringAnswerList] = useRecoilState(mentoringListData);
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

  const asyncFunction = async () => {
    try {
      await postComment();
      const getAwait = await getComment('mentoring', `${id}`);
      setMentoringAnswerList(getAwait.data.data.mentoringComments);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const SummitAnswerBtn = () => {
    asyncFunction();
    setMentoringnAnswerContents('');
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `/mentoring/${id}`,
    }).then((res) => {
      const { data } = res;
      setMentoringAnswerList(data.data.mentoringComments);
    });
  }, []);

  return (
    <S.ContainerViewAnswer>
      <S.ViewAnswer>
        {mentoringAnswerList?.map((list) => (
          <MentoringAnswerList
            key={list.mentoringCommentId}
            createdAt={list.createdAt}
            mentoringCommentId={list.mentoringCommentId}
            mentoringComment={list.mentoringComment}
            updatedAt={list.updatedAt}
            nickname={list.nickname}
          ></MentoringAnswerList>
        ))}
      </S.ViewAnswer>
      <S.QuillContent>
        <S.QuillArea theme="snow" value={mentoringAnswerContents} onChange={setMentoringnAnswerContents} />
        <div className="btn-area">
          <S.SubmitButton onClick={SummitAnswerBtn}>등록</S.SubmitButton>
        </div>
      </S.QuillContent>
    </S.ContainerViewAnswer>
  );
};

export default MentoringAnswer;
