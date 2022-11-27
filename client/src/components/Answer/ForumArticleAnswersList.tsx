import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import AnswerListView from './AnswerListView';

interface answerList {
  postComments: [
    {
      createdAt?: string;
      postCommentId: number;
      postscriptComment: string;
      updatedAt?: string;
    }
  ];
}

const ForumArticleAnswerList = () => {
  const [answerList, setAnswerList] = useState<answerList[]>();
  const { id } = useParams();

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
    <div>
      {answerList?.map((list: any, idx) => (
        <AnswerListView key={idx} list={list}></AnswerListView>
      ))}
    </div>
  );
};

export default ForumArticleAnswerList;
