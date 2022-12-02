import { useState } from 'react';
import styled from 'styled-components';
import LoadMapBanner from '../assets/image/LoadMapBanner.png';
import LoadMapMobile from '../assets/image/LoadMapMobile.png';

const LoadMapContent = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImgBanner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 5vh;

  img {
    width: 65%;
    height: 20vh;
  }
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const ImgMobile = styled.div`
  display: none;
  @media screen and (max-width: 414px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 10vh;
  }
`;

const ButtonContent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 414px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const SelectButton = styled.button`
  margin: 10vh 0 20vh 1rem;
  /* width: ${(props) => (props.className === 'select-btn' ? '35vw' : '30vw')};
  height: ${(props) => (props.className === 'select-btn' ? '35vh' : '30vh')}; */
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
    /* width: ${(props) => (props.className === 'select-btn' ? '90vw' : '80vw')};
    height: ${(props) => (props.className === 'select-btn' ? '23vh' : '20vh')}; */
    width: 80vw;
    height: 20vh;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;
  }
`;
const LoadMap = () => {
  const [linkSelect, setLinkSelect] = useState<number>(0);

  const LoadMapBtn = (id: number) => {
    setLinkSelect(id);
  };
  const Loadmapmenu = [
    { id: 1, text: 'frontend' },
    { id: 2, text: 'backend' },
  ];
  return (
    <LoadMapContent>
      <ImgBanner>
        <img src={LoadMapBanner} alt="banner" />
      </ImgBanner>
      <ImgMobile>
        <img src={LoadMapMobile} alt="mobilebanner" />
      </ImgMobile>

      <ButtonContent>
        {Loadmapmenu.map((el) => (
          <SelectButton
            key={el.id}
            onClick={() => LoadMapBtn(el.id)}
            className={linkSelect === el.id ? 'select-btn' : 'nonselect-btn'}
          >
            <a href={`https://roadmap.sh/${el.text}`} target="_blank" rel="noreferrer">
              {el.text}
            </a>
          </SelectButton>
        ))}
      </ButtonContent>
    </LoadMapContent>
  );
};

export default LoadMap;
