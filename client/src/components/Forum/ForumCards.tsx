import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { readAllPosts } from '../../utils/api/forumAPI';
import Pagination from '../Pagination';
import ForumCard from './ForumCard';
import * as S from './ForumCards.style';
import ForumContentHeader from './ForumContentHeader';

const ForumCards = () => {
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
      <ForumContentHeader forumType={forumType} />

      <S.MainContainer>
        {posts.map((post: any) => (
          <ForumCard key={post[`${forumType}Id`]} forumType={forumType} post={post} />
        ))}
      </S.MainContainer>

      <Pagination />
    </S.Container>
  );
};

export default ForumCards;
