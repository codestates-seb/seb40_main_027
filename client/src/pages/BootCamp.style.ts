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
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background-color: #fff;
  font-size: 14px;
  tfoot {
    background-color: #eee;
  }
  th,
  td {
    position: relative;
    padding: 10px 14px;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
  th,
  td:last-child {
    border-right: none;
  }
  th {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    background-color: var(--greenTableHeader);
  }
`;
