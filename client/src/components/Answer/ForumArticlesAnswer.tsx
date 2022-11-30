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
import { StyledBackgroundButton } from '../Button/BackgroundButton';

const QuillContent = styled.div`
  border: 2px solid var(--greenSub);
  border-radius: 10px;
  height: 16vh;

  .btn-area {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const QuillArea = styled(ReactQuill)`
  background-color: var(--whiteBackground);
  margin: 1rem;
  border-radius: 10px;
`;

const SubmitButtton = styled(StyledBackgroundButton)`
  width: 6rem;
  height: 2rem;
  margin-right: 2rem;
  border-radius: 10px;
`;

interface answerListProps {
  createdAt: string;
  postCommentId: number;
  postscriptComment: string;
  updatedAt?: string;
  nickname: string;
}

export interface IanswerList extends Array<answerListProps> {}

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
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTcwNDAyMSwiZXhwIjoxNjY5NzkwNDIxfQ.ipJnckImRyPfR9kXlDI3Kajkp-M3RZzFUHBDpdxBK1Teu0kV8wjyHxh6WET_fckelUSByRdh7QDTZOnqA8FFXg',
      },
    });
  };

  const AsyncFunction = async () => {
    axios.defaults.withCredentials = true;
    try {
      const postAwait = await postComment();
      const getAwait = await getComment('postscript', `${id}`);
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
            nickname={list.nickname}
          ></AnswerListView>
        ))}
      </div>
      <QuillContent>
        <QuillArea theme="snow" value={answerContents} onChange={(e) => setAnswerContents(e)} />
        <div className="btn-area">
          <SubmitButtton onClick={SummitAnswerBtn}>등록</SubmitButtton>
        </div>
      </QuillContent>
    </>
  );
};

export default ForumArticlesAnswer;
