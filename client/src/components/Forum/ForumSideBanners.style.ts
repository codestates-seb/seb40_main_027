import styled from 'styled-components';
import { GRAY_CONTENTS_BORDER, WHITE_BACKGROUND } from '../../assets/constant/COLOR';

export const Aside = styled.aside`
  line-height: 130%;
  padding: calc(56 / 16 * 1rem) calc(20 / 16 * 1rem) 0 0;

  & > *:not(:last-child) {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const DivContainer = styled.div`
  width: calc(177 / 16 * 1rem);
  padding: calc(9 / 16 * 1rem);
  background-color: ${({ color }) => color ?? WHITE_BACKGROUND};
  border: 1px solid ${({ color }) => color ?? GRAY_CONTENTS_BORDER};
  border-radius: calc(9 / 16 * 1rem);

  & > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }
`;

export const H3 = styled.h3`
  font-size: calc(20 / 16 * 1rem);
  font-weight: 700;
  text-align: center;
  line-height: 150%;
`;

export const Li = styled.li`
  list-style-type: decimal;
  margin-left: calc(18 / 16 * 1rem);

  :not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }
`;
