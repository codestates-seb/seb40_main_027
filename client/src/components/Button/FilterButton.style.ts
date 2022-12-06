import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';

export const Dropdown = styled.div`
  position: relative;
`;

export const Button = styled(StyledBorderButton)`
  width: 90px;
  height: 36px;
  border-radius: 6px;
  font-size: 15px;
  color: var(--blackTextNormal);

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (max-width: 414px) {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    font-size: 13px;

    & > svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const TextContainer = styled.span`
  width: 100%;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  width: 90px;
  text-align: center;
  background-color: var(--whiteBackground);
  padding: calc(10 / 16 * 1rem);
  border: 1px solid var(--grayContentsBorder);
  border-radius: 6px;
  font-size: 15px;

  & > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }

  & > button {
    background: none;
    border: 0;
    font-size: 15px;
  }
`;

export const SelectedButton = styled.button`
  color: var(--greenMain);
`;
