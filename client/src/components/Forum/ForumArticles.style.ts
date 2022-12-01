import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - (197 / 16 * 1rem));

  & > *:not(:last-child) {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    width: 100%;

    & > *:not(:last-child) {
      margin-bottom: calc(10 / 16 * 1rem);
    }
  }
`;
