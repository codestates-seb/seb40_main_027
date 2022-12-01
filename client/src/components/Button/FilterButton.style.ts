import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';

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
