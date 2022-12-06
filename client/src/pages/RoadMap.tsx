import { useState } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const RoadMapContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 414px) {
    margin-top: 25%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const SelectButton = styled.button`
  margin: 10vh 0 20vh 1rem;
  width: 30vw;
  height: 30vh;
  border: 2px solid var(--greenMain);
  border-radius: 20px;
  font-size: 6rem;
  background-color: ${(props) => (props.className === 'select-btn' ? 'var(--greenSub)' : 'while')};

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 414px) {
    width: 80vw;
    height: 20vh;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;
  }
`;
const RoadMap = () => {
  const [linkSelect, setLinkSelect] = useState<number>(0);

  const roadMapBtn = (id: number) => {
    setLinkSelect(id);
  };
  const roadMapMenu = [
    { id: 1, text: 'frontend' },
    { id: 2, text: 'backend' },
  ];
  return (
    <RoadMapContent>
      <Banner text="로드맵" pageType="road" />
      <ButtonContent>
        {roadMapMenu.map((el) => (
          <SelectButton
            key={el.id}
            onClick={() => roadMapBtn(el.id)}
            className={linkSelect === el.id ? 'select-btn' : 'nonselect-btn'}
          >
            <a href={`https://roadmap.sh/${el.text}`} target="_blank" rel="noreferrer">
              {el.text}
            </a>
          </SelectButton>
        ))}
      </ButtonContent>
    </RoadMapContent>
  );
};

export default RoadMap;
