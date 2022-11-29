import { useRef, useState, useMemo, useEffect } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import axios from 'axios';
import AnswerListView from './AnswerListView';
import { useParams, useNavigate } from 'react-router';
import 'react-quill/dist/quill.snow.css';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState } from 'recoil';
import { answerListData } from '../../atoms/index';

const QuillContent = styled.div`
  border: 3px solid red;
  display: flex;
  justify-content: center;
  height: 18vh;
  flex-direction: column;
  flex-wrap: wrap;
  /* background-color: gray; */
`;

const ForumArticlesAnswer = () => {
  const quillRef = useRef<ReactQuill>();
  const { id } = useParams();
  const [answerContents, setAnswerContents] = useState('');
  const [answerList, setAnswerList] = useRecoilState(answerListData);
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
      url: `/postscript/${id}/comment`,
      data: { postscriptComment: answerContents },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicGp3QGdtYWlsLmNvbSIsInN1YiI6InBqd0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2OTU4MzYsImV4cCI6MTY2OTc4MjIzNn0.P6yVNzmbVyPjAe5RlYE3i-7LG-hvHiCOSP0dPFnsaGVa9BiwqVQ0UVCewVlfmsWkYHdNF5Wg2zI9CEs6EnKxVg',
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
      <QuillContent>
        <ReactQuill theme="snow" value={answerContents} onChange={(e) => setAnswerContents(e)} />

        <button onClick={SummitAnswerBtn}>추가</button>
      </QuillContent>
    </>
  );
};

export default ForumArticlesAnswer;
