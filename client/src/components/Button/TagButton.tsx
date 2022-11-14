import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';

const StyledBigButton = styled(StyledBorderButton)`
  height: 36px;
  border-radius: 9px;
  font-size: 16px;

  @media screen and (max-width: 414px) {
    height: 30px;
    border-radius: 8px;
    font-size: 14px;
  }
`;

const StyledSmallButton = styled(StyledBorderButton)`
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 414px) {
    height: 22px;
    border-radius: 5px;
    font-size: 13px;
  }
`;

export const BigTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledBigButton color={color}>{text}</StyledBigButton>;
};

export const SmallTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledSmallButton color={color}>{text}</StyledSmallButton>;
};
