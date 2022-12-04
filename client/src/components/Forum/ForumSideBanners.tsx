import { useEffect, useState } from 'react';
import { RED_IMMINENT_BOOT_CAMPS, YELLOW_HOT_POSTS } from '../../assets/constant/COLOR';
import { readHotPosts, readImminentBootCamps } from '../../utils/api/forumAPI';
import * as S from './ForumSideBanners.style';

interface PropsType {
  forumType: string;
}

interface HotPost {
  id: string;
  title: string;
}

const HotPostsBanner = ({ forumType }: PropsType) => {
  const [hotPosts, setHotPosts] = useState<HotPost[]>([]);

  useEffect(() => {
    readHotPosts(forumType, setHotPosts);
  }, []);

  return (
    <S.DivContainer color={YELLOW_HOT_POSTS}>
      <S.H3>인기 게시글</S.H3>
      <ol>
        {hotPosts.map((post: HotPost) => (
          <S.Li key={post.id}>
            <S.A href={`/${forumType}/${post.id}`}>{post.title}</S.A>
          </S.Li>
        ))}
      </ol>
    </S.DivContainer>
  );
};

interface ImminentBootCamp {
  id: string;
  process: string;
  finalRegisterDate: string;
}

const ImminentBootCampsBanner = () => {
  const [imminentBootCamps, setImminentBootCamps] = useState<ImminentBootCamp[]>([]);

  useEffect(() => {
    readImminentBootCamps(setImminentBootCamps);
  }, []);

  return (
    <S.DivContainer color={RED_IMMINENT_BOOT_CAMPS}>
      <S.H3>접수 마감 임박</S.H3>
      <ol>
        {imminentBootCamps.map((bootCamp) => (
          <S.Li key={bootCamp.id}>
            <S.A href={`/bootcamp/${bootCamp.id}`}>
              <div>{bootCamp.process}</div>
              <div>{bootCamp.finalRegisterDate} 마감</div>
            </S.A>
          </S.Li>
        ))}
      </ol>
    </S.DivContainer>
  );
};

const TendencyTestBanner = () => {
  return (
    <S.DivContainer>
      <S.H3>
        <S.StyledLink to="/test">
          내 개발 성향이
          <br />
          궁금하다면?
        </S.StyledLink>
      </S.H3>
    </S.DivContainer>
  );
};

const ForumSideBanners = ({ forumType }: PropsType) => {
  return (
    <S.Aside>
      <HotPostsBanner forumType={forumType} />
      <ImminentBootCampsBanner />
      <TendencyTestBanner />
    </S.Aside>
  );
};

export default ForumSideBanners;
