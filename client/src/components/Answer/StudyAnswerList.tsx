import axios from 'axios';
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useRef, useState, useMemo, KeyboardEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { answerListData, answerListProps } from '../../atoms/index';

const AnswerTextContent = styled.div`
  /* background-color: red; */
  border-bottom: 1px solid black;
`;

const StudyAnswerList = ({ createdAt, postCommentId, updatedAt, postscriptComment }: answerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  // const [commentInfo, setCommentInfo] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [answerList, setAnswerList] = useRecoilState(answerListData);

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
      url: `/postscript/comment/${postCommentId}`,
      data: { postscriptComment: commentValue },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicGp3QGdtYWlsLmNvbSIsInN1YiI6InBqd0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MDk1NDMsImV4cCI6MTY2OTY5NTk0M30.XcAWYYmpkTNFhq-VaW8zKthvWNlBYWjsTAUf2eXoL_Zz0WGL0DO5YD6vKC8B6ofsbYhRz4KgTZcoLlAVvikxMQ',
      },
    });
  };

  const deleteComment = () => {
    return axios({
      method: 'delete',
      url: `/postscript/comment/delete/${postCommentId}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicGp3QGdtYWlsLmNvbSIsInN1YiI6InBqd0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MDk1NDMsImV4cCI6MTY2OTY5NTk0M30.XcAWYYmpkTNFhq-VaW8zKthvWNlBYWjsTAUf2eXoL_Zz0WGL0DO5YD6vKC8B6ofsbYhRz4KgTZcoLlAVvikxMQ',
      },
    })
      .then(() => {})
      .catch(() => console.log('err'));
  };

  const patchAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const patchAwait = await patchComment();
      const getAwait = await getComment(`${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const deleteAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const deleteAwait = await deleteComment();
      const getAwait = await getComment(`${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const PatchHanlder = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //수정에서 403오류 발생
    patchAsync();
    setIsPatch(!isPatch);
    // axios({
    //   method: 'patch',
    //   url: `/postscript/comment/${list.postCommentId}`,
    //   data: { commentValue },
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ0OTUxNSwiZXhwIjoxNjY5NDkyNzE1fQ.SbuTBucG_fvPnESoQvuBunGpmI3283d9OH1XXVnR2dsmcgiGwtbGDonfzRxiWZSZvY1GmBXxFT3Dob56QLs3lQ',
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     const { data } = res;
    //     setCommentInfo(data);
    //     setIsPatch(!isPatch);
    //   })
    //   .catch(() => console.log('err'));
  };

  const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteAsync();
  };

  return (
    <AnswerTextContent>
      {isPatch ? (
        <div>
          <ReactQuill theme="snow" value={commentValue} onChange={setCommentValue} />
          <button onClick={PatchHanlder}>완료</button>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <span>username</span>
              <div>
                <button onClick={editHandler}>수정</button>
                <button onClick={deleteHandler}>삭제</button>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(postscriptComment),
              }}
            />
          </div>
        </div>
      )}

      <div>{postCommentId}</div>
    </AnswerTextContent>
  );
};

export default StudyAnswerList;
