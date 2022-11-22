import styled from 'styled-components';
import { StyledBorderButton } from './BorderButton';
import { StyledBackgroundButton } from './BackgroundButton';
import { BLUE_STUDY, GRAY_CONTENTS_BORDER, GREEN_MAIN, PURPLE_REVIEW } from '../../assets/constant/COLOR';

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

const tags = [
  { text: '부트캠프 후기', color: PURPLE_REVIEW },
  { text: '개발 공부법', color: BLUE_STUDY },
  { text: '전체', color: GRAY_CONTENTS_BORDER },
  { text: '모집 중', color: GREEN_MAIN },
  { text: '모집 완료', color: GRAY_CONTENTS_BORDER },
];

const findColor = (text: string) => {
  return tags.filter((tag) => tag.text === text)[0].color ?? GREEN_MAIN;
};

interface PropsType {
  text: string;
  color?: string;
}

/** 색상 적용 순서: color 속성 > text에 따른 기본 색상 > GREEN_MAIN */
export const BigBorderTagButton = ({ text, color }: PropsType) => {
  return (
    <StyledBigBorderButton color={color ? color : findColor(text) ? findColor(text) : GREEN_MAIN}>
      {text}
    </StyledBigBorderButton>
  );
};

/** 색상 적용 순서: color 속성 > text에 따른 기본 색상 > GREEN_MAIN */
export const SmallBorderTagButton = ({ text, color }: PropsType) => {
  return (
    <StyledSmallBorderButton color={color ? color : findColor(text) ? findColor(text) : GREEN_MAIN}>
      {text}
    </StyledSmallBorderButton>
  );
};

/** 색상 적용 순서: color 속성 > text에 따른 기본 색상 > GREEN_MAIN */
export const BigBackgroundTagButton = ({ text, color }: PropsType) => {
  return (
    <StyledBigBackgroundButton color={color ? color : findColor(text) ? findColor(text) : GREEN_MAIN}>
      {text}
    </StyledBigBackgroundButton>
  );
};

export const SmallBackgroundTagButton = ({ text, color }: PropsType) => {
  return (
    <StyledSmallBackgroundButton color={color ? color : findColor(text) ? findColor(text) : GREEN_MAIN}>
      {text}
    </StyledSmallBackgroundButton>
  );
};
