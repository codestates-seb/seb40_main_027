import { useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
// import styled from 'styled-components';
// import axios from 'axios';

import 'react-quill/dist/quill.snow.css';

const ForumArticlesAnswer = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
          ['image', 'video'],
        ],
        handlers: {
          // image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </>
  );
};

export default ForumArticlesAnswer;
