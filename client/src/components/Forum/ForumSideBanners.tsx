import { RED_IMMINENT_BOOT_CAMPS, YELLOW_HOT_POSTS } from '../../assets/constant/COLOR';
import * as S from './ForumSideBanners.style';

const HotPostscriptsBanner = () => {
  /** 더미 데이터 */
  const hotPostscriptTitles = [
    '코드스테이츠 후기',
    '네카라쿠배 개발자가 알려주는 공부법',
    '3위 게시글',
    '4위 게시글',
    '5위 게시글',
  ];

  return (
    <S.DivContainer color={YELLOW_HOT_POSTS}>
      <S.H3>월간 인기 게시물</S.H3>
      <ol>
        {hotPostscriptTitles.map((title, idx) => (
          <S.Li key={idx}>{title}</S.Li>
        ))}
      </ol>
    </S.DivContainer>
  );
};

const ImminentBootCampsBanner = () => {
  /** 더미 데이터 */
  const imminentBootCamps = [
    {
      title: '코드스테이츠 프론트엔드',
      final_register_date: '2022-11-20',
    },
    {
      title: '항해99 백엔드',
      final_register_date: '2022-11-23',
    },
    {
      title: '코드스테이츠 백엔드',
      final_register_date: '2022-11-27',
    },
  ];

  return (
    <S.DivContainer color={RED_IMMINENT_BOOT_CAMPS}>
      <S.H3>접수 마감 임박</S.H3>
      <ol>
        {imminentBootCamps.map((camp, idx) => (
          <S.Li key={idx}>
            <div>{camp.title}</div>
            <div>{camp.final_register_date} 마감</div>
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
        내 개발 성향이
        <br />
        궁금하다면?
      </S.H3>
    </S.DivContainer>
  );
};

const ForumSideBanners = () => {
  return (
    <S.Aside>
      <HotPostscriptsBanner />
      <ImminentBootCampsBanner />
      <TendencyTestBanner />
    </S.Aside>
  );
};

export default ForumSideBanners;
