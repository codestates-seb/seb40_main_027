import { useRef, useState, useMemo, useEffect } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
// import AnswerListView from './AnswerListView';
import { useParams, useNavigate } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState } from 'recoil';
import { mentoringListData } from '../../atoms/index';
import StudyAnswerList from './StudyAnswerList';
import MentoringAnswerList from './MentoringAnswerList';

const QuillContent = styled.div``;

interface mentoringAnswerListProps {
  createdAt?: string;
  commentId: number;
  mentoringComment: string;
  updatedAt?: string;
  nickname: string;
}

export interface MentoringanswerList extends Array<mentoringAnswerListProps> {}

const MentoringAnswer = () => {
  const quillRef = useRef<ReactQuill>();
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
  console.log(studyanswerList);
  return (
    <>
      <div>
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
      </div>
      <QuillContent>
        <ReactQuill theme="snow" value={studyAnswerContents} onChange={(e) => setStudynAnswerContents(e)} />

        <button onClick={SummitAnswerBtn}>추가</button>
      </QuillContent>
    </>
  );
};

export default MentoringAnswer;
