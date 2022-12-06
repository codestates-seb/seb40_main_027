import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const TableWrap = styled.table`
  width: 60vw;
  min-width: 960px;
  font-size: 1vw;
  thead {
    background-color: var(--greenSub);
    width: 100%;
    font-weight: bold;
  }
  tr {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid var(--grayTableBorder);
    border-bottom: 0;
  }
  th {
    border-right: 1px solid var(--grayTableBorder);
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-child(1) {
      width: 20%;
      max-width: 20%;
    }
    :nth-child(2) {
      width: 10%;
      max-width: 10%;
    }
    :nth-child(3) {
      width: 10%;
      max-width: 10%;
    }
    :nth-child(4) {
      width: 40%;
      max-width: 40%;
    }
    :nth-child(5) {
      width: 10%;
      max-width: 10%;
    }
    :nth-child(6) {
      width: 10%;
      max-width: 10%;
      border-right: 0;
    }
  }
  tbody {
    width: 60vw;
    min-width: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    tr {
      width: 100%;
      :nth-child(even) {
        background: var(--grayBoardAreaBorder);
      }
    }
    a {
      text-decoration: none;
    }
    td {
      padding: calc(100vh / 40) 0;
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 1rem;
      border-right: 1px solid var(--grayTableBorder);
      :nth-child(1) {
        width: 20%;
        max-width: 20%;
      }
      :nth-child(2) {
        width: 10%;
        max-width: 10%;
      }
      :nth-child(3) {
        width: 10%;
        max-width: 10%;
      }
      :nth-child(4) {
        width: 40%;
        max-width: 40%;
      }
      :nth-child(5) {
        width: 10%;
        max-width: 10%;
      }
      :nth-child(6) {
        width: 10%;
        max-width: 10%;
        border-right: 0;
      }
    }
  }
  @media ${theme.mobile} {
    display: none;
  }
`;

export const MobileComp = styled.div`
  display: none;

  @media ${theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 160px;
    :nth-child(odd) {
      background: var(--grayBoardAreaBorder);
    }
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--grayTableBorder);
      padding: calc(100% / 20) 0;
    }
  }
`;

export const MobileLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: calc(100% / 15) 0;
  }
`;

export const MobileMiddle = styled(Link)`
  text-decoration: none;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: calc(100% / 15) 0;
    word-break: keep-all;
    text-align: center;
    text-align-last: center;
  }
`;
export const MobileRight = styled.div`
  width: 30%;
  div {
    padding: calc(100% / 15) 0;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
