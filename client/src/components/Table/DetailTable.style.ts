import styled from 'styled-components';
import theme from '../../styles/theme';

export const Detail = styled.div`
  width: 60vw;
  height: 80vh;
  border: 3px solid var(--greenBootDetailBorder);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.mobile} {
    flex-direction: column;
  }
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-child {
      border-right: 2px solid var(--greenBootDetailBorder);
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
          margin-left: calc(100vh / 70);
          width: 50%;
        }
        :last-child {
          margin-right: calc(100vh / 70);
          max-width: 50%;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0;
          width: 100%;
          > span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            word-wrap: break-word;
          }
        }
      }
    }
  }
  @media ${theme.mobile} {
    width: 90vw;
  }
`;

export const RowHeader = styled.div`
  width: 70%;
  height: 20%;
  border: 1px solid var(--greenMain);
  font-size: 1vw;
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
