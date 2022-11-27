import axios from 'axios';

import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useRef, useState, useMemo, KeyboardEvent } from 'react';
import { useParams, useNavigate } from 'react-router';

interface answerList {
  list: {
    createdAt?: string;
    postCommentId: number;
    postscriptComment: string;
    updatedAt?: string;
  };
}

const AnswerListView = ({ list }: answerList, idx: any) => {
  //수정상태를 하나만들고 만약맞으면 위에 그...창에서 수정상태를 만든다??
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentInfo, setCommentInfo] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const CommentValueHandler = (event: any) => {
    setCommentValue(event);
    console.log(commentValue);
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

  const editHandler = () => {
    setIsPatch(!isPatch);
  };

  const PatchHanlder = () => {
    axios({
      method: 'patch',
      url: `/postscript/comment/${list.postCommentId}`,
      data: { commentValue },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ0OTUxNSwiZXhwIjoxNjY5NDkyNzE1fQ.SbuTBucG_fvPnESoQvuBunGpmI3283d9OH1XXVnR2dsmcgiGwtbGDonfzRxiWZSZvY1GmBXxFT3Dob56QLs3lQ',
      },
    })
      .then((res) => {
        console.log(res);
        const { data } = res;
        setCommentInfo(data);
        setIsPatch(!isPatch);
      })
      .catch(() => console.log('err'));
  };

  const deleteHandler = () => {
    axios({
      method: 'delete',
      url: `/postscript/comment/delete/${list.postCommentId}`,
    })
      .then(() => {
        window.location.reload();
      })
      .catch(() => console.log('err'));
  };
  return (
    <div>
      {isPatch ? (
        <div>
          <ReactQuill theme="snow" value={commentValue} onChange={CommentValueHandler} />
          <button onClick={PatchHanlder}>완료</button>
        </div>
      ) : (
        'a'
      )}
      {commentInfo.length !== 0 ? <div>{commentInfo}</div> : <div>{list.postscriptComment}</div>}
      <div>{list.postCommentId}</div>
      <button onClick={editHandler}>수정</button>
      <button onClick={deleteHandler}>삭제</button>
    </div>
  );
};

export default AnswerListView;
