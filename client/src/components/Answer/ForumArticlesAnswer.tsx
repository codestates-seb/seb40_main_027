import { useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

import 'react-quill/dist/quill.snow.css';

const ForumArticlesAnswer = () => {
  // const QuillRef = useRef<ReactQuill>();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [answerContents, setAnswerContents] = useState('');

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
      data: { answerContents },
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTM1NTAxOSwiZXhwIjoxNjY5Mzk4MjE5fQ.MN3n0GS62o6xcOsT2GVrsYhdAhFltA-dUHjmTgaZlBemr_xEv-CGJQI6gj0edUdAjF5PEF82GhkTl_eDlPyXEQ',
      // },
    })
      .then((res) => navigate('/postscript/${id}/comment'))
      .catch(() => console.log('err'));
  };

  return (
    <>
      {/* <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={answerContents || ''}
        onChange={ContentsHandler}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      /> */}
      <ReactQuill theme="snow" value={answerContents} onChange={ContentsHandler} />;
      <button onClick={SummitAnswerBtn}>추가</button>
    </>
  );
};

export default ForumArticlesAnswer;
