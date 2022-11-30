import axios from 'axios';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { getComment } from '../../utils/API/getApi';
import { useSetRecoilState } from 'recoil';
import { answerListData } from '../../atoms/index';
import { formatDistanceToNow, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calculate } from '../Calculate';
import * as S from './AnswerListView.style';
import { AnswerViewContainer, QuillContainer } from './AnswerContainer';

interface answerListProps {
  createdAt: string;
  postCommentId: number;
  postscriptComment: string;
  updatedAt: string;
  nickname: string;
}

const AnswerListView = ({ createdAt, postCommentId, updatedAt, postscriptComment, nickname }: answerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState('');
  // const [answerList, setAnswerList] = useRecoilState(answerListData);
  const setAnswerList = useSetRecoilState(answerListData);

  const ds = new Date(createdAt);
  const d = format(ds, 'yyyy.MM.dd HH:mm:ss');

  let timels = Calculate(createdAt);
  const createTime = formatDistanceToNow(new Date(d), { locale: ko });
  // const updateTime = formatDistanceToNow(new Date(updatedAt), { locale: ko });

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
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTcwNDAyMSwiZXhwIjoxNjY5NzkwNDIxfQ.ipJnckImRyPfR9kXlDI3Kajkp-M3RZzFUHBDpdxBK1Teu0kV8wjyHxh6WET_fckelUSByRdh7QDTZOnqA8FFXg',
      },
    });
  };

  const deleteComment = () => {
    return axios({
      method: 'delete',
      url: `/postscript/comment/delete/${postCommentId}`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTcwNDAyMSwiZXhwIjoxNjY5NzkwNDIxfQ.ipJnckImRyPfR9kXlDI3Kajkp-M3RZzFUHBDpdxBK1Teu0kV8wjyHxh6WET_fckelUSByRdh7QDTZOnqA8FFXg',
      },
    })
      .then(() => {})
      .catch(() => console.log('err'));
  };

  const patchAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const patchAwait = await patchComment();
      const getAwait = await getComment('postscript', `${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const deleteAsync = async () => {
    axios.defaults.withCredentials = true;
    try {
      const deleteAwait = await deleteComment();
      const getAwait = await getComment('postscript', `${id}`);

      setAnswerList(getAwait.data.postComments);
    } catch {
      console.log('err');
    }
  };

  const PatchHanlder = (e: React.MouseEvent<HTMLElement>) => {
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
              __html: DOMPurify.sanitize(postscriptComment),
            }}
          />
        </div>
      )}
    </S.AnswerTextContent>
  );
};

export default AnswerListView;
