import PageHeader from '../components/Header/PageHeader';
import ForumSideBanners from '../components/Forum/ForumSideBanners';
import Banner from '../components/Banner';
import * as S from './Forum.style';
import ForumDetail from '../components/Forum/ForumDetail';
import ForumWrite from '../components/Forum/ForumWrite';
import ForumArticles from '../components/Forum/ForumArticles';
import { useLocation } from 'react-router-dom';
import ForumCards from '../components/Forum/ForumCards';

const Forum = () => {
  const { pathname } = useLocation();
  const [, forumType, pageType] = pathname.split('/');

  return (
    <S.PageWrapper>
      {forumType === 'postscript' ? <Banner text="수료 후기" pageType="post" /> : null}
      {forumType === 'study' ? <Banner text="스터디" pageType="post" /> : null}
      {forumType === 'mentoring' ? <Banner text="멘토링" pageType="post" /> : null}
      <S.FlexContainer>
        <ForumSideBanners />
        {pageType === undefined && forumType === 'postscript' ? <ForumArticles /> : null}
        {pageType === undefined && forumType === 'study' ? <ForumCards /> : null}
        {pageType === undefined && forumType === 'mentoring' ? <ForumCards /> : null}
        {/^\d+$/.test(pageType) ? <ForumDetail /> : null}
        {pageType === 'write' ? <ForumWrite /> : null}
      </S.FlexContainer>
    </S.PageWrapper>
  );
};

export default Forum;
