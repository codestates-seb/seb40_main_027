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

  @media screen and (max-width: 414px) {
    .list-line {
      display: none;
    }
    .list-name {
      display: none;
    }
  }
`;

const MypageList = () => {
  return (
    <ListContent>
      <div className="list-line">
        <span className="list-name">작성 글</span>
      </div>
    </ListContent>
  );
};
export default MypageList;
