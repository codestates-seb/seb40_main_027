import { useRef, useState, useMemo, useEffect } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
// import AnswerListView from './AnswerListView';
import { useParams, useNavigate } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState } from 'recoil';
import { studyListData } from '../../atoms/index';
import StudyAnswerList from './StudyAnswerList';

const QuillContent = styled.div`
  /* border: 3px solid red;
  display: flex;
  justify-content: center;
  height: 18vh;
  flex-direction: column;
  flex-wrap: wrap; */
  /* background-color: gray; */
`;

interface studyAnswerListProps {
  createdAt?: string;
  studyCommentId: number;
  comment: string;
  updatedAt?: string;
  nickname: string;
}

export interface StudyanswerList extends Array<studyAnswerListProps> {}

const StudyAnswer = () => {
  const quillRef = useRef<ReactQuill>();
  const { id } = useParams();
  const [studyAnswerContents, setStudynAnswerContents] = useState('');
  const [studyanswerList, setStudyAnswerList] = useRecoilState(studyListData);
  // const [answerUserName, setAnswerUserName] = useState<answerList[]>();
  // const [answerList, setAnswerList] = useState<answerList[]>();

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
      url: `/study/${id}/comment`,
      data: { studyComment: studyAnswerContents },
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
      const getAwait = await getComment('study', `${id}`);
      setStudyAnswerList(getAwait.data.data.studyComments);
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
      url: `/study/${id}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    }).then((res) => {
      console.log(res);
      const { data } = res;

      setStudyAnswerList(data.data.studyComments);
    });
  }, []);

  return (
    <>
      <div>
        {studyanswerList?.map((list, idx) => (
          <StudyAnswerList
            key={idx}
            createdAt={list.createdAt}
            studyCommentId={list.studyCommentId}
            studyComment={list.comment}
            updatedAt={list.updatedAt}
            nickname={list.nickname}
          ></StudyAnswerList>
        ))}
      </div>
      <QuillContent>
        <ReactQuill theme="snow" value={studyAnswerContents} onChange={(e) => setStudynAnswerContents(e)} />

        <button onClick={SummitAnswerBtn}>추가</button>
      </QuillContent>
    </>
  );
};

export default StudyAnswer;
