import styled from 'styled-components';

export const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleSection = styled.section`
  width: 60vw;
  min-width: 960px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3%;
  div {
    display: flex;
    justify-content: flex-end;
    width: calc(100% / 3);
  }
`;

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
      // 우측과 좌측 상단 border값에 radius주기가 어려워서 pass
      /* :first-child {
        border-radius: 10px 0 0 0;
      }
      :last-child {
        border-radius: 0 10px 0 0;
      } */
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
`;
