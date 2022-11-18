import styled from 'styled-components';

const ListContent = styled.div`
  height: 90vh;
  width: 100%;

  .list-line {
    display: flex;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid var(--grayContentsBorder);
    align-items: center;
  }
  .list-name {
    font-size: 1rem;
    margin-left: 2rem;
  }

  .content-list {
    border-bottom: 1px solid var(--grayContentsBorder);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 7rem;
    margin: 10px;
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
  }
`;
//밑의 더미데이터는 임의로 모양만 잡기위해 넣어논 것입니다
// interface Dummy {
//   tag: string;
//   title: string;
//   content: string;
//   picture: string;
//   name: string;
//   time: number;
//   view: number;
//   heart: boolean;
// }

const DummyData = {
  tag: '1',
  title: '코드스테이츠 후기',
  content: '안녕하세요, 코드스테이츠 프론트엔드 부트캠프 40기 수료생입니다',
  picture: '사진',
  name: '홍길동123',
  time: 20.42,
  view: 351,
  heart: false,
};
const MypageList = () => {
  const DummyList = [DummyData, DummyData];
  console.log(DummyList);

  return (
    <ListContent>
      <div className="list-line">
        <span className="list-name">작성 글</span>
      </div>
      <div>
        {DummyList.map((el, idx) => (
          <div className="content-list" key={idx}>
            <div>{el.tag}</div>
            <div>{el.title}</div>
            <div>{el.content}</div>
            <div className="mycontent-info">
              <div>{el.picture}</div>
              <div>{el.name}</div>
            </div>
          </div>
        ))}
      </div>
    </ListContent>
  );
};
export default MypageList;
