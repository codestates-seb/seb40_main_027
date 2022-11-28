import { useRef, useState, useMemo, useEffect } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
import AnswerListView from './AnswerListView';
import { useParams, useNavigate } from 'react-router';
// import ForumArticleAnswerList from './ForumArticleAnswersList';
import 'react-quill/dist/quill.snow.css';
import { getComment } from './getApi';
import { useRecoilState } from 'recoil';
import { answerListData } from '../../atoms/index';
import { lstat } from 'fs';

// interface answerList {
//   postComments: [
//     {
//       createdAt?: string;
//       postCommentId: number;
//       postscriptComment: string;
//       updatedAt?: string;
//     }
//   ];
// }

// export interface answerListProps {
//   createdAt: string;
//   postCommentId: number | undefined;
//   postscriptComment: string | undefined;
//   updatedAt?: string;
// }

// export interface answerMiddle {
//   list: answerListProps;
// }

// export interface answerPlaceList {
//   postComment: answerMiddle[];
// }

// interface answerUserInfoList {
//   member: {
//     memberId: number;
//     email: string;
//     nickname: string;
//   };
// }

const ForumArticlesAnswer = () => {
  const quillRef = useRef<ReactQuill>();
  const { id } = useParams();
  // const navigate = useNavigate();

  const [answerContents, setAnswerContents] = useState('');
  const [answerList, setAnswerList] = useRecoilState(answerListData);
  // const [answerUserName, setAnswerUserName] = useState<answerList[]>();
  // const [answerList, setAnswerList] = useState<answerList[]>();

  // const ContentsHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newValue = event.currentTarget.value;
  //   setAnswerContents(newValue);
  // };

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
      url: `/postscript/${id}/comment`,
      data: { postscriptComment: answerContents },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicGp3QGdtYWlsLmNvbSIsInN1YiI6InBqd0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MDk1NDMsImV4cCI6MTY2OTY5NTk0M30.XcAWYYmpkTNFhq-VaW8zKthvWNlBYWjsTAUf2eXoL_Zz0WGL0DO5YD6vKC8B6ofsbYhRz4KgTZcoLlAVvikxMQ',
      },
    });
  };

  const AsyncFunction = async () => {
    axios.defaults.withCredentials = true;
    try {
      const postAwait = await postComment();

      const getAwait = await getComment(`${id}`);

      setAnswerList(getAwait.data.postComments);
      // setAnswerUserName(getAwait.data.member);
      // console.log(answerUserName);
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
      url: `/postscript/${id}`,
    }).then((res) => {
      const { data } = res;
      setAnswerList(data.postComments);
    });
  }, []);

  return (
    <>
      <div>
        {answerList?.map((list, idx) => (
          <AnswerListView
            key={idx}
            createdAt={list.createdAt}
            postCommentId={list.postCommentId}
            postscriptComment={list.postscriptComment}
            updatedAt={list.updatedAt}
          ></AnswerListView>
        ))}
      </div>

      <ReactQuill theme="snow" value={answerContents} onChange={(e) => setAnswerContents(e)} />
      <div>{answerContents}</div>
      <button onClick={SummitAnswerBtn}>추가</button>
    </>
  );
};

export default ForumArticlesAnswer;
