import ForumArticle from './ForumArticle';
import * as S from './ForumArticles.style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ForumContentHeader from './ForumContentHeader';
import PagePagination from '../Pagination/PagePagination';
import axios from 'axios';

const ForumArticles = () => {
  const [posts, setPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState<any>([]); //이부분 종원님이 타입을 생성해주시면 하고 아니면 제가 생성해서 새로 인터페이스 만들겠습니다
  const [pageList, setPageList] = useState(1);
  const [postPerPage] = useState(10);
  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  const handlePagePost = (pageList: number) => {
    setPageList(pageList);
  };

  useEffect(() => {
    //readAllPosts를 못쓴이유 => data말고 pageInfo도 가져와야 하는데 인수 한개로 부족하기 때문
    axios({
      method: 'get',
      url: `/${forumType}?page=${pageList}&size=${postPerPage}&sort=${forumType}Id`,
    }).then((res) => {
      const { data } = res;
      setPosts(data.pageInfo.totalElements);
      const infoData = data.data;
      setCurrentPage(infoData);
    });
  }, [pageList, postPerPage]);

  return (
    <S.Container>
      <ForumContentHeader url={`/${forumType}?page=${pageList}&size=10`} setPosts={setPosts} />

      <main>
        {currentPage &&
          currentPage.map((post: any) => (
            <ForumArticle key={post[`${forumType}Id`]} forumType={forumType} post={post} />
          ))}
      </main>

      <PagePagination
        totalCount={posts}
        page={pageList}
        postPerPage={postPerPage}
        pageRangeDisplayed={5}
        handlePageChange={handlePagePost}
      />
    </S.Container>
  );
};

export default ForumArticles;
