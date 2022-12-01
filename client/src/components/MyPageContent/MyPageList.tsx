import styled from 'styled-components';
import MyPageLists from './MyPageLists';
import axios from 'axios';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import MyPagePagination from './MyPagePagination';

const ListContent = styled.div`
  height: 90vh;

  .list-line {
    display: flex;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid var(--grayContentsBorder);
    align-items: center;
  }
  .list-name {
    font-size: 2rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 414px) {
    .list-line {
      display: none;
    }
    .list-name {
      display: none;
    }
    .content-list {
      overflow: hidden;
    }
  }
`;
interface PropsAnswerType {
  mentoringId?: number;
  mentoringTitle?: string;
  mentoringContent?: string;
  postscriptId?: number;
  postscriptTitle?: string;
  postscriptContent?: string;
  studyId?: number;
  studyTitle?: string;
  studyContent?: string;
  totalVotes: number;
  createdAt: string;
  updatedAt: string;
  tagName: string;
  view: number;
}

export interface propsAnswerList extends Array<PropsAnswerType> {}

const MyPageList = () => {
  // const [fWritingList, setFWritingList] = useState([]);
  // const [sWritingList, setSWritingList] = useState([]);
  // const [mWritingList, setMWritingList] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<PropsAnswerType[]>();
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(7);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handlePostPage = (page: number) => {
    setPage(page);
  };

  const plusClick = (e: string) => {
    setPage(page + 1);
  };

  const MinusClick = (e: string) => {
    setPage(page - 1);
  };
  console.log(page);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'get',
      url: '/users/mypage/writing',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTc5Mzk4OSwiZXhwIjoxNjY5ODgwMzg5fQ.jwHPEroDLyZmiL2TRvYuvaED2bCmDwsXUs3QL1nA8QVoU9Kkr2nmJd5vSlHdOr5ak9hKHOf3Vj65Ffe_gIUdnQ',
      },
    }).then((res) => {
      const { data } = res;
      // setFWritingList(data.data.postscript.reverse());
      // setSWritingList(data.data.studies);
      // setMWritingList(data.data.mentor);
      const postP = data.data.postscript;
      const postS = data.data.studies;
      const postM = data.data.mentor;
      // const Maxarr = [...data.data.studies, ...sWritingList, ...mWritingList];
      const Maxarr: propsAnswerList = [...postP, ...postS, ...postM];

      setTotalPost(postP.length + postM.length + postS.length);
      const MaxPage = Maxarr.slice(indexOfFirstPost, indexOfLastPost);
      setCurrentPosts(MaxPage);
    });
  }, [page, indexOfFirstPost, indexOfLastPost]);

  return (
    <ListContent>
      <div className="list-line">
        <span className="list-name">작성 글</span>
      </div>
      <div className="content-list">
        {currentPosts &&
          currentPosts.map((list, idx) => (
            <MyPageLists
              key={idx}
              mentoringId={list.mentoringId}
              mentoringTitle={list.mentoringTitle}
              mentoringContent={list.mentoringContent}
              postscriptId={list.postscriptId}
              postscriptTitle={list.postscriptTitle}
              postscriptContent={list.postscriptContent}
              studyId={list.studyId}
              studyTitle={list.studyTitle}
              studyContent={list.studyContent}
              totalVotes={list.totalVotes}
              createdAt={list.createdAt}
              updatedAt={list.updatedAt}
              tagName={list.tagName}
              view={list.view}
            />
          ))}
      </div>
      <MyPagePagination
        totalCount={totalPost}
        page={page}
        postPerPage={postPerPage}
        pageRangeDisplayed={5}
        handlePageChange={handlePostPage}
        plusClick={plusClick}
        MinusClick={MinusClick}
      />
    </ListContent>
  );
};
export default MyPageList;
