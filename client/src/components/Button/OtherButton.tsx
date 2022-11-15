import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';
import { StyledBackgroundButton } from './BackgroundButton';

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

export const BorderOtherButton = ({ text = '기타', color = '#1DCA89' }) => {
  return <StyledBorderOtherButton color={color}>{text}</StyledBorderOtherButton>;
};

export const BackgroundOtherButton = ({ text = '기타', color = '#1DCA89' }) => {
  return <StyledBackgroundOtherButton color={color}>{text}</StyledBackgroundOtherButton>;
};
