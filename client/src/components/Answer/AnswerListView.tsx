import axios from 'axios';
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { getComment } from '../../utils/API/getApi';
import { useRecoilState, useSetRecoilState } from 'recoil';
// import { answerListData, answerListProps } from '../../atoms/index';
import { answerListData } from '../../atoms/index';
import { StyledBorderButton } from '../Button/BorderButton';
import { Icon } from '@iconify/react';
import { StyledBackgroundButton } from '../Button/BackgroundButton';
import { formatDistanceToNow, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calculate } from '../Calculate';

const AnswerTextContent = styled.div`
  border-bottom: 1px solid black;

  &:nth-last-child(1) {
    border: none;
  }
`;

const UserAnswerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TimeOrName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;

  span:nth-last-child(1) {
    margin-left: 1rem;
    margin-top: 0;
    align-items: flex-start;
  }
`;

const AnswerButton = styled(StyledBorderButton)`
  margin: 0.5rem;
`;

const OkButton = styled(StyledBackgroundButton)`
  width: 3rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const NameZone = styled.span`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const TextArea = styled.div`
  height: 5vh;
`;

interface answerListProps {
  createdAt: string;
  postCommentId: number;
  postscriptComment: string;
  updatedAt?: string;
  nickname: string;
}

const AnswerListView = ({ createdAt, postCommentId, updatedAt, postscriptComment, nickname }: answerListProps) => {
  const [isPatch, setIsPatch] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState('');
  const [answerList, setAnswerList] = useRecoilState(answerListData);

  const ds = new Date(createdAt);
  const d = format(ds, 'yyyy.MM.dd HH:mm:ss');
  // console.log(Calculate(createdAt));
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
          <ButtonArea>
            <OkButton onClick={PatchHanlder}>완료</OkButton>
            <OkButton color={'red'} onClick={editHandler}>
              취소
            </OkButton>
          </ButtonArea>
        </div>
      ) : (
        <div>
          <div>
            <UserAnswerInfo>
              <TimeOrName>
                <NameZone>
                  <Icon icon="carbon:user-avatar-filled-alt" width="20" height="15" />
                  {nickname}
                </NameZone>
                <span>{updatedAt ? <span>{timels}</span> : createTime} </span>
              </TimeOrName>

              <div>
                <AnswerButton onClick={editHandler}>수정</AnswerButton>
                <AnswerButton color="red" onClick={deleteHandler}>
                  삭제
                </AnswerButton>
              </div>
            </UserAnswerInfo>
            <TextArea
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(postscriptComment),
              }}
            />
          </div>
        </div>
      )}
    </AnswerTextContent>
  );
};

export default AnswerListView;
