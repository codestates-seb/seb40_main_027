import * as S from './ForumCards.style';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ForumCard from './ForumCard';
import ForumContentHeader from './ForumContentHeader';
import { getAllPostsInfinite } from '../../utils/api/forumAPI';
import Loading from '../Loading/Loading';

const ForumCards = () => {
  const [posts, setPosts] = useState<any>([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  const getPosts = useCallback(async (page: number) => {
    setLoading(true);
    const url = `/${forumType}?page=${page}&size=9&sort=${forumType}Id`;
    getAllPostsInfinite(url, setPosts, posts, setTotalPages);
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts(page);
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      if (page < totalPages!) {
        setPage(page + 1);
      } else if (page === totalPages) {
        setLoading(false);
      }
    }
  }, [inView, loading]);

  return (
    <S.Container>
      <ForumContentHeader url={`/${forumType}?page=${page}&size=9`} setPosts={setPosts} />

      <S.MainContainer>
        {posts.map((post: any) => (
          <ForumCard key={post[`${forumType}Id`]} forumType={forumType} post={post} />
        ))}
      </S.MainContainer>
      <S.RefDiv ref={ref}>{inView && loading ? <Loading /> : null}</S.RefDiv>
    </S.Container>
  );
};

export default ForumCards;
