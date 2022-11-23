import styled from 'styled-components';
import theme from '../../styles/theme';

export const TableWrap = styled.table`
  width: 60vw;
  min-width: 960px;
  font-size: 20px;
  thead {
    font-weight: bold;
    background-color: var(--greenTableHeader);
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
    tr {
      border: 1px solid var(--grayTableBorder);
      td {
        padding: calc(100vh / 40) 0;
        border: 1px solid var(--grayTableBorder);
        text-align: center;
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
    display: block;
    width: 97vw;
    > div {
      display: flex;
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

export const MobileMiddle = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: calc(100% / 15) 0;
  }
`;
