import { ContentWrapper } from './../../pages/Forum.style';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const TableWrap = styled.table`
  width: 60vw;
  min-width: 960px;
  font-size: 1vw;
  thead {
    font-weight: bold;
    background-color: var(--greenSub);
    width: calc(100% / 6);
    th {
      border: 1px solid var(--grayTableBorder);
      :before {
        border: 2px solid red;
        border-radius: 5px;
      }
    }
  }
  tbody {
    a {
      text-decoration: none;
    }
    td {
      padding: calc(100vh / 40) 0;
      border: 1px solid var(--grayTableBorder);
      text-align: center;
      font-size: 1rem;
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
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: calc(100% / 15) 0;
  }
`;

export const MobileMiddle = styled(Link)`
  text-decoration: none;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: calc(100% / 15) 0;
  }
`;
export const MobileRight = styled.div`
  width: calc(100% / 3);
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
