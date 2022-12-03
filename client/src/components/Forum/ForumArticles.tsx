import Pagination from '../Pagination';
import ForumArticle from './ForumArticle';
import * as S from './ForumArticles.style';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ForumContentHeader from './ForumContentHeader';
import { readAllPosts } from '../../utils/api/forumAPI';

const ForumArticles = () => {
  const [posts, setPosts] = useState<any>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page');

  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  useEffect(() => {
    if (page === null) {
      setSearchParams({
        page: '1',
      });
      page = '1';
    }

    const url = `/${forumType}?page=${page}&size=10&sort=${forumType}Id`;
    readAllPosts(url, setPosts);
  }, []);

  return (
    <S.Container>
      <ForumContentHeader url={`/${forumType}?page=${page}&size=10`} setPosts={setPosts} />

      <main>
        {posts.map((post: any) => (
          <ForumArticle key={post[`${forumType}Id`]} forumType={forumType} post={post} />
        ))}
      </main>

      <Pagination />
    </S.Container>
  );
};

export default ForumArticles;
