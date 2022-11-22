import styled from 'styled-components';
import theme from '../styles/theme';

export const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.mobile} {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const MiddleSection = styled.section`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3%;
  div {
    margin: calc(100% / 30) 0;
  }
`;

export const grayBtn = styled.button`
  width: 122px;
  height: 59px;
  border: none;
  border-radius: 4.5px;
  background-color: var(--grayBootButton);
  margin: calc(100% / 30) 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
  }
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
