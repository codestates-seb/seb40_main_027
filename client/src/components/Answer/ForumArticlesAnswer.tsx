import { useRef, useState, useMemo, useEffect } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import ForumArticleAnswerList from './ForumArticleAnswersList';
import 'react-quill/dist/quill.snow.css';

interface answerList {
  postComments: [
    {
      createdAt?: string;
      postCommentId: number;
      postscriptComment: string;
      updatedAt?: string;
    }
  ];
}

const ForumArticlesAnswer = () => {
  const quillRef = useRef<ReactQuill>();
  const { id } = useParams();
  // const navigate = useNavigate();

  const [answerContents, setAnswerContents] = useState('');
  const [answerList, setAnswerList] = useState<answerList[]>();
  const ContentsHandler = (event: any) => {
    setAnswerContents(event);
    console.log(answerContents);
  };

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

  const SummitAnswerBtn = () => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'post',
      url: `/postscript/${id}/comment`,
      data: { postscriptComment: answerContents },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTU0NDk3NywiZXhwIjoxNjY5NTg4MTc3fQ.1vRtPnBjCiR7TEx0orF4zkRWbzTQguQgfpBzUVMf_tYuqC4wiQa-iUlG1Bs1wk107oCIvW5i7i1JJ7hiq8qGKA',
      },
    })
      .then((res) => {
        const { data } = res;

        // window.location.reload();
      })
      .catch(() => console.log('err'));
  };

  return (
    <>
      <ReactQuill theme="snow" value={answerContents} onChange={ContentsHandler} />
      <button onClick={SummitAnswerBtn}>추가</button>
    </>
  );
};

export default ForumArticlesAnswer;
