import styled from 'styled-components';
import MyPageLists from './MyPageLists';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MyPagePagination from '../Pagination/MyPagePagination';

const ListContent = styled.div`
  height: 100vh;
  overflow: scroll;
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
  const [totalPost, setTotalPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<PropsAnswerType[]>();
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const access = localStorage.getItem('access');
  const handlePostPage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: '/users/mypage/writing',
      headers: {
        Authorization: access,
      },
    }).then((res) => {
      const { data } = res;
      const postP = data.data.postscript;
      const postS = data.data.studies;
      const postM = data.data.mentor;
      // const Maxarr = [...data.data.studies, ...sWritingList, ...mWritingList];
      const maxArr: propsAnswerList = [...postP, ...postS, ...postM].sort(
        (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
      );

      setTotalPost(postP.length + postM.length + postS.length);
      const maxPage = maxArr.slice(indexOfFirstPost, indexOfLastPost);
      setCurrentPosts(maxPage);
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
      />
    </ListContent>
  );
};
export default MyPageList;
