import styled from 'styled-components';
import theme from '../styles/theme';

export const PageWrap = styled.div`
  width: 100vw;
  min-height: 1080px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.mobile} {
    min-height: 667px;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 1rem !important;
    }
  }
`;

export const MiddleDiv = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1%;
  div {
    display: flex;
    justify-content: flex-end;
    width: calc(100% / 3);
  }
  @media ${theme.mobile} {
    display: none;
  }
`;

export const RefDiv = styled.div`
  bottom: 0;
  height: 100%;
`;
