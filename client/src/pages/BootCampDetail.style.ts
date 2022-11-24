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
  justify-content: space-evenly;
  margin-bottom: 0.4%;
  div {
    margin: calc(100% / 30) 0;
  }
`;
