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
      url: `/study/${id}/comment`,
      data: { studyComment: answerContents },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ0OTUxNSwiZXhwIjoxNjY5NDkyNzE1fQ.SbuTBucG_fvPnESoQvuBunGpmI3283d9OH1XXVnR2dsmcgiGwtbGDonfzRxiWZSZvY1GmBXxFT3Dob56QLs3lQ',
      },
    })
      .then((res) => {
        const { data } = res;

        // window.location.reload();
      })
      .catch(() => console.log('err'));
  };

  // useEffect(() => {
  //   axios.defaults.withCredentials = true;

  //   axios({
  //     method: 'get',
  //     url: `/postscript/${id}`,
  //   }).then((res) => {
  //     const { data } = res;
  //     setAnswerList(data.postComments);
  //   });
  // }, []);
  // console.log(answerList);
  return (
    <>
      {/* <ForumArticleAnswerList /> */}

      <ReactQuill theme="snow" value={answerContents} onChange={ContentsHandler} />
      <button onClick={SummitAnswerBtn}>추가</button>
    </>
  );
};

export default ForumArticlesAnswer;
