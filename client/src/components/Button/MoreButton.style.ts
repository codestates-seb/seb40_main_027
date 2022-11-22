import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: none;
  border: 0;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  background-color: var(--whiteBackground);
  padding: calc(10 / 16 * 1rem);
  border: 1px solid var(--grayContentsBorder);

  & > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }
`;
