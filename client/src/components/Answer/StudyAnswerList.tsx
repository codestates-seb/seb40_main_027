import axios from 'axios';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { getComment } from '../../utils/API/getApi';
import { useSetRecoilState } from 'recoil';
import { studyListData } from '../../atoms/index';
import * as S from './AnswerListView.style';
import { AnswerViewContainer, QuillContainer } from './AnswerContainer';

interface studyAnswerListProps {
  createdAt: string;
  studyCommentId: number;
  studyComment: string;
  updatedAt: string;
  nickname: string;
}

const StudyAnswerList = ({ createdAt, studyCommentId, updatedAt, studyComment, nickname }: studyAnswerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState('');
  // const [answerList, setAnswerList] = useRecoilState(studyListData);
  const setAnswerList = useSetRecoilState(studyListData);
  const { id } = useParams();

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

  const editHandler = () => {
    setIsPatch(!isPatch);
  };

  const patchComment = () => {
    return axios({
      method: 'patch',
      url: `/study/comment/${studyCommentId}`,
      data: { studyComment: commentValue },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    });
  };

  const deleteComment = () => {
    return axios({
      method: 'delete',
      url: `/study/comment/${studyCommentId}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTczNzAwNSwiZXhwIjoxNjY5ODIzNDA1fQ.AykpiUvJlzmcTWT7x2iMKPbPo0y9cCIVzqhiMECTGFKAMKg171ropdOZjpB_lLbV7m6AkQBlYPbIahmpmPGcdQ',
      },
    })
      .then(() => {})
      .catch(() => console.log('err'));
  };

  const patchAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const patchAwait = await patchComment();
      const getAwait = await getComment('study', `${id}`);

      setAnswerList(getAwait.data.data.studyComments);
    } catch {
      console.log('err');
    }
  };

  const deleteAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const deleteAwait = await deleteComment();
      const getAwait = await getComment('study', `${id}`);

      setAnswerList(getAwait.data.data.studyComments);
    } catch {
      console.log('err');
    }
  };

  const PatchHanlder = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //수정에서 403오류 발생
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
          <QuillContainer PatchHanlder={PatchHanlder} editHandler={editHandler} />
        </div>
      ) : (
        <div>
          <AnswerViewContainer
            nick={nickname}
            updateAt={updatedAt}
            createAt={createdAt}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
          <S.TextArea
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(studyComment),
            }}
          />
        </div>
      )}
    </S.AnswerTextContent>
  );
};

export default StudyAnswerList;
