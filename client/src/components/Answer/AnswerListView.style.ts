import styled from 'styled-components';
import { StyledBackgroundButton } from '../Button/BackgroundButton';
import { StyledBorderButton } from '../Button/BorderButton';

export const AnswerTextContent = styled.div`
  border-bottom: 1px solid black;

  &:nth-last-child(1) {
    border: none;
  }
`;

export const UserAnswerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeOrName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;

  span:nth-last-child(1) {
    margin-left: 1rem;
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const AnswerButton = styled(StyledBorderButton)`
  margin: 0.5rem;
`;

export const OkButton = styled(StyledBackgroundButton)`
  width: 3rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const NameZone = styled.span`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const TextArea = styled.div`
  height: 5vh;
  margin-left: 1rem;
`;
