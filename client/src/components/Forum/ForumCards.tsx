import { BigBorderTagButton, FilterButton, WriteButton } from '../Button';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar/SearchBar';
import ForumCard from './ForumCard';
import * as S from './ForumCards.style';

const ForumCards = () => {
  const tags = ['전체', '모집 중', '모집 완료'];
  /** 더미 데이터 */
  const posts = [
    {
      studyId: 0,
      studyTitle: '코드스테이츠 프론트엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 중'],
      view: 32,
      like: 2,
      user: {
        userId: 0,
        name: '홍길동',
        userEmail: 'hong@gmail.com',
      },
      createdAt: '22.11.18 16:35',
      updatedAt: '22.11.18 16:36',
    },
    {
      studyId: 1,
      studyTitle: '코드스테이츠 백엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 백엔드 부트캠프 후기입니다. 네이버 3년차 개발자입니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 완료'],
      view: 1232,
      like: 31,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '22.11.18 16:35',
      updatedAt: '22.11.18 16:36',
    },
    {
      studyId: 2,
      studyTitle: '개발 공부법 공유합니다.',
      studyContent:
        '<p>안녕하세요. 네이버 3년차 개발자입니다.</p><h3>개발 공부법</h3><p>첫 번째 공부법입니다.<br>두 번째 공부법입니다.</p>',
      studyTags: ['모집 완료'],
      view: 12,
      like: 0,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '22.11.18 16:35',
      updatedAt: '22.11.18 16:36',
    },
    {
      studyId: 3,
      studyTitle: '코드스테이츠 프론트엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 중'],
      view: 32,
      like: 2,
      user: {
        userId: 0,
        name: '홍길동',
        userEmail: 'hong@gmail.com',
      },
      createdAt: '22.11.18 16:35',
      updatedAt: '22.11.18 16:36',
    },
    {
      studyId: 4,
      studyTitle: '코드스테이츠 백엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 백엔드 부트캠프 후기입니다. 네이버 3년차 개발자입니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 중'],
      view: 1232,
      like: 31,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '2022-11-18T16:35:36.862535',
      updatedAt: '2022-11-18T16:36:02.781674',
    },
    {
      studyId: 5,
      studyTitle: '개발 공부법 공유합니다.',
      studyContent:
        '<p>안녕하세요. 네이버 3년차 개발자입니다.</p><h3>개발 공부법</h3><p>첫 번째 공부법입니다.<br>두 번째 공부법입니다.</p>',
      studyTags: ['모집 중'],
      view: 12,
      like: 0,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '2022-11-18T16:35:36.862535',
      updatedAt: '2022-11-18T16:36:02.781674',
    },
    {
      studyId: 6,
      studyTitle: '코드스테이츠 프론트엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 중'],
      view: 32,
      like: 2,
      user: {
        userId: 0,
        name: '홍길동',
        userEmail: 'hong@gmail.com',
      },
      createdAt: '2022-11-18T16:35:36.862535',
      updatedAt: '2022-11-18T16:36:02.781674',
    },
    {
      studyId: 7,
      studyTitle: '코드스테이츠 백엔드 후기',
      studyContent:
        '<p>안녕하세요. 코드스테이츠 백엔드 부트캠프 후기입니다. 네이버 3년차 개발자입니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
      studyTags: ['모집 중'],
      view: 1232,
      like: 31,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '2022-11-18T16:35:36.862535',
      updatedAt: '2022-11-18T16:36:02.781674',
    },
    {
      studyId: 8,
      studyTitle: '개발 공부법 공유합니다.',
      studyContent:
        '<p>안녕하세요. 네이버 3년차 개발자입니다.</p><h3>개발 공부법</h3><p>첫 번째 공부법입니다.<br>두 번째 공부법입니다.</p>',
      studyTags: ['모집 완료'],
      view: 12,
      like: 0,
      user: {
        userId: 1,
        name: '김코딩',
        userEmail: 'kim@gmail.com',
      },
      createdAt: '2022-11-18T16:35:36.862535',
      updatedAt: '2022-11-18T16:36:02.781674',
    },
  ];

  return (
    <S.Container>
      <S.ContentHeader>
        <S.TagsContainer>
          {tags.map((tag, idx) => (
            <BigBorderTagButton key={idx} text={tag} />
          ))}
        </S.TagsContainer>
        <S.OtherContainer>
          <SearchBar />
          <FilterButton />
          <WriteButton />
        </S.OtherContainer>
      </S.ContentHeader>

      <S.MainContainer>
        {posts.map((post) => (
          <ForumCard key={post.studyId} post={post} />
        ))}
      </S.MainContainer>

      <Pagination />
    </S.Container>
  );
};

export default ForumCards;
