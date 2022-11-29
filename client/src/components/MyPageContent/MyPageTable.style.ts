import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableSchedule = styled.table`
  height: 50%;
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
      border-bottom: 1px solid var(--grayContentsBorder);
      text-align: center;
      padding: calc(100vh / 40) 0;
    }
    tr:nth-child(even) {
      background: var(--grayBoardAreaBorder);
    }
    td:nth-child(1) {
      border: none;
      text-align: center;
      padding: 0%;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 414px) {
    tbody {
      td {
        border-bottom: 1px solid var(--grayContentsBorder);
        text-align: center;
        padding: calc(100vh / 40) 0;
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
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
`;
