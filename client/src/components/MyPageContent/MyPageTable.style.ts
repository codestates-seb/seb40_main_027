import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableSchedule = styled.table`
  width: 100%;

  thead {
    width: calc(100% / 7);
    height: 10%;
    font-weight: bold;
    background-color: var(--greenSub);

    th {
      text-align: center;
      width: calc(100% / 7);
      padding: calc(100vh / 40) 0;
    }
  }
  tbody {
    td {
      text-align: center;
      padding: calc(100vh / 40) 0;
    }
    tr {
      border-bottom: 1px solid var(--grayContentsBorder);
    }
    tr:nth-child(even) {
      background: var(--grayBoardAreaBorder);
    }

    td:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
    }
  }

  @media screen and (max-width: 414px) {
    tbody {
      td {
        border-bottom: 1px solid var(--grayContentsBorder);
        text-align: center;
        padding: calc(100vh / 40) 0;
        overflow: hidden;
      }
    }
  }
`;

export const TableLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

export const LikeButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
`;
