import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';

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

interface ClickType {
  onClick?: any | null;
}

export const LoginButton = ({ onClick }: ClickType) => {
  return <StyledButton onClick={onClick}>로그인</StyledButton>;
};
