import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/api/answerAPI';
import { useRecoilState } from 'recoil';
import { studyListData } from '../../atoms/index';
import StudyAnswerList from './StudyAnswerList';
import * as S from './ForumAnswer.style';

interface studyAnswerListProps {
  createdAt: string;
  studyCommentId: number;
  studyComment: string;
  updatedAt: string;
  nickname: string;
}

export interface studyAnswerList extends Array<studyAnswerListProps> {}

const StudyAnswer = () => {
  const { id } = useParams();
  const [studyAnswerContents, setStudynAnswerContents] = useState('');
  const [studyanswerList, setStudyAnswerList] = useRecoilState(studyListData);
  const access = localStorage.getItem('access');

  const postComment = () => {
    return axios({
      method: 'post',
      url: `/study/${id}/comment`,
      data: { studyComment: studyAnswerContents },
      headers: {
        Authorization: access,
      },
    });
  };

  const AsyncFunction = async () => {
    try {
      await postComment();
      const getAwait = await getComment('study', `${id}`);
      setStudyAnswerList(getAwait.data.data.studyComments);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const SummitAnswerBtn = () => {
    AsyncFunction();
    setStudynAnswerContents('');
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `/study/${id}`,
    }).then((res) => {
      console.log(res);
      const { data } = res;

      setStudyAnswerList(data.data.studyComments);
    });
  }, []);

  return (
    <S.ContainerViewAnswer>
      <S.ViewAnswer>
        {studyanswerList?.map((list, idx) => (
          <StudyAnswerList
            key={idx}
            createdAt={list.createdAt}
            studyCommentId={list.studyCommentId}
            studyComment={list.studyComment}
            updatedAt={list.updatedAt}
            nickname={list.nickname}
          ></StudyAnswerList>
        ))}
      </S.ViewAnswer>
      <S.QuillContent>
        <S.QuillArea theme="snow" value={studyAnswerContents} onChange={setStudynAnswerContents} />
        <div className="btn-area">
          <S.SubmitButton onClick={SummitAnswerBtn}>등록</S.SubmitButton>
        </div>
      </S.QuillContent>
    </S.ContainerViewAnswer>
  );
};

export default StudyAnswer;
