import styled from 'styled-components';

export const Container = styled.div`
  font-size: calc(20 / 16 * 1rem);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    font-size: calc(14 / 16 * 1rem);
  }
`;
