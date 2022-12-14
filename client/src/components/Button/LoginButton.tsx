import styled from 'styled-components';
import { StyledBackgroundButton } from './BackgroundButton';
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

const StyleLogPageBtn = styled(StyledBackgroundButton)`
  width: 280px;
  height: 48px;
  border-radius: 10px;
  font-size: 30px;
  margin-top: 1rem;
  @media screen and (max-width: 414px) {
    width: 230px;
    height: 48px;
    border-radius: 10px;
    font-size: 20px;
  }
`;
interface PropsType {
  onClick?: any | null;
}

export const LogPageBtn = ({ onClick }: PropsType) => {
  return <StyleLogPageBtn onClick={onClick}>로그인</StyleLogPageBtn>;
};
