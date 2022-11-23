import styled from 'styled-components';
import MyPageLists from './MyPageLists';

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

  .mycontent-info {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 414px) {
    .list-line {
      display: none;
    }
    .list-name {
      display: none;
    }
    .content-list {
      /* background-color: red;
      border: 1px solid black; */
      overflow: hidden;
    }
  }
`;

const dummyDatalist = [
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 2,
    postscriptTitle: '테스트용 제목2.',
    postscriptContent: '테스트 내용2 ',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    like: 0,
    view: 0,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-18T16:35:41.87709',
    updatedAt: '2022-11-18T16:35:41.87709',
  },
  {
    postscriptId: 3,
    postscriptTitle: '테스트용 제목3.',
    postscriptContent: '테스트 내용2 ',

    like: 0,
    view: 0,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-18T16:35:41.87709',
    updatedAt: '2022-11-18T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
  {
    postscriptId: 1,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '2022-11-20T16:35:41.87709',
    updatedAt: '2022-11-20T16:35:41.87709',
  },
];

const MyPageList = () => {
  return (
    <ListContent>
      <div className="list-line">
        <span className="list-name">작성 글</span>
      </div>
      <div className="content-list">
        {dummyDatalist.map((list) => (
          <MyPageLists key={list.postscriptId} list={list} />
        ))}
      </div>
    </ListContent>
  );
};
export default MyPageList;
