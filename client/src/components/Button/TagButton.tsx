import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';
import { StyledBackgroundButton } from './BackgroundButton';

const StyledBigBorderButton = styled(StyledBorderButton)`
  height: 36px;
  border-radius: 9px;
  font-size: 16px;

  @media screen and (max-width: 414px) {
    height: 30px;
    border-radius: 8px;
    font-size: 14px;
  }
`;

const StyledSmallBorderButton = styled(StyledBorderButton)`
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 414px) {
    height: 22px;
    border-radius: 5px;
    font-size: 13px;
  }
`;

const StyledBigBackgroundButton = styled(StyledBackgroundButton)`
  height: 36px;
  border-radius: 9px;
  font-size: 16px;

  @media screen and (max-width: 414px) {
    height: 30px;
    border-radius: 8px;
    font-size: 14px;
  }
`;

const StyledSmallBackgroundButton = styled(StyledBackgroundButton)`
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 414px) {
    height: 22px;
    border-radius: 5px;
    font-size: 13px;
  }
`;

export const BigBorderTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledBigBorderButton color={color}>{text}</StyledBigBorderButton>;
};

export const SmallBorderTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledSmallBorderButton color={color}>{text}</StyledSmallBorderButton>;
};

export const BigBackgroundTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledBigBackgroundButton color={color}>{text}</StyledBigBackgroundButton>;
};

export const SmallBackgroundTagButton = ({ text = '태그', color = '#B832F8' }) => {
  return <StyledSmallBackgroundButton color={color}>{text}</StyledSmallBackgroundButton>;
};
