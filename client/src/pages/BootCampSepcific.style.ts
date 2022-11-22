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
  width: 60vw;
  height: calc(100vh - 20vh);
  border: 3px solid var(--greenBootSpecificBorder);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.mobile} {
    flex-direction: column;
  }
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-child {
      border-right: 2px solid var(--greenBootSpecificBorder);
      @media ${theme.mobile} {
        border: none;
      }
    }
    > div {
      display: flex;
      width: 100%;
      height: calc(100% / 3);
      justify-content: center;
      align-items: center;
      > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        @media ${theme.mobile} {
          font-size: 4vw;
        }
        :first-child {
          margin-left: calc(100vh / 50);
        }
        :last-child {
          margin-right: calc(100vh / 60);
        }
      }
    }
  }
  @media ${theme.mobile} {
    width: 90vw;
  }
`;

export const RowHeader = styled.div`
  width: 65%;
  height: 20%;
  border: 1px solid var(--greenMain);
  font-size: 1.12vw;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.mobile} {
    width: 85%;
    height: 40%;
    font-size: 4vw;
  }
`;
