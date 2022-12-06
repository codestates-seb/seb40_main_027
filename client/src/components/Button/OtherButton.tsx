import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';
import { StyledBackgroundButton } from './BackgroundButton';
import { GREEN_MAIN } from '../../assets/constant/COLOR';

const StyledBorderOtherButton = styled(StyledBorderButton)`
  width: 56px;
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 22px;
    border-radius: 5px;
    font-size: 13px;
  }
`;

const StyledBackgroundOtherButton = styled(StyledBackgroundButton)`
  width: 56px;
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 22px;
    border-radius: 5px;
    font-size: 13px;
  }
`;

interface PropsType {
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  text?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

export const BorderOtherButton = ({ type, form, text = '기타', color = GREEN_MAIN, onClick, onSubmit }: PropsType) => {
  return (
    <StyledBorderOtherButton type={type} form={form} color={color} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </StyledBorderOtherButton>
  );
};

export const BackgroundOtherButton = ({
  type,
  form,
  text = '기타',
  color = GREEN_MAIN,
  onClick,
  onSubmit,
}: PropsType) => {
  return (
    <StyledBackgroundOtherButton type={type} form={form} color={color} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </StyledBackgroundOtherButton>
  );
};
