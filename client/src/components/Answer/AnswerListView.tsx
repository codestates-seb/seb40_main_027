import axios from 'axios';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getComment, deleteComment } from '../../utils/api/answerAPI';
import { useSetRecoilState } from 'recoil';
import { answerListData } from '../../atoms/index';
import * as S from './AnswerListView.style';
import { AnswerViewContainer, QuillContainer } from './AnswerContainer';

interface AnswerListProps {
  createdAt: string;
  postscriptCommentId: number;
  postscriptComment: string;
  updatedAt: string;
  nickname: string;
}

const AnswerListView = ({
  createdAt,
  postscriptCommentId,
  updatedAt,
  postscriptComment,
  nickname,
}: AnswerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState('');
  const setAnswerList = useSetRecoilState(answerListData);
  const access = localStorage.getItem('access');
  const { id } = useParams();

  const editHandler = () => {
    setIsPatch(!isPatch);
  };

  const patchComment = () => {
    return axios({
      method: 'patch',
      url: `/postscript/comment/${postscriptCommentId}`,
      data: { postscriptComment: commentValue },
      headers: {
        Authorization: access,
      },
    });
  };

  const patchAsync = async () => {
    try {
      await patchComment();
      const getAwait = await getComment('postscript', `${id}`);

      setAnswerList(getAwait.data.data.postscriptComments);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const deleteAsync = async () => {
    try {
      await deleteComment(`${postscriptCommentId}`, 'postscript');
      const getAwait = await getComment('postscript', `${id}`);

      setAnswerList(getAwait.data.data.postscriptComments);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const patchHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    patchAsync();
    setIsPatch(!isPatch);
    setCommentValue('');
  };

  const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteAsync();
  };

  return (
    <S.AnswerTextContent>
      {isPatch ? (
        <div>
          <ReactQuill theme="snow" value={commentValue} onChange={setCommentValue} />
          <QuillContainer patchHandler={patchHandler} editHandler={editHandler} />
        </div>
      ) : (
        <div>
          <AnswerViewContainer
            nickname={nickname}
            updatedAt={updatedAt}
            createdAt={createdAt}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
          <S.TextArea
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postscriptComment),
            }}
          />
        </div>
      )}
    </S.AnswerTextContent>
  );
};

export default AnswerListView;
