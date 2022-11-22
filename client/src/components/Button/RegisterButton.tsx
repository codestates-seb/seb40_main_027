import styled from 'styled-components';
import { StyledBackgroundButton } from './BackgroundButton';

const StyledButton = styled(StyledBackgroundButton)`
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

interface PropsType {
  text?: string;
}

export const RegisterButton = ({ text }: PropsType) => {
  return <StyledButton>{text ? text : '회원가입'}</StyledButton>;
};
