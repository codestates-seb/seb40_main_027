import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';
import onClick from '../Header/MainHeader';
// import React from 'react';

const StyledButton = styled(StyledBorderButton)`
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 18px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;

interface clickType {
  onClick?: any | null;
}

export const LoginButton = ({ onClick }: clickType) => {
  return <StyledButton onClick={onClick}>로그인</StyledButton>;
};
