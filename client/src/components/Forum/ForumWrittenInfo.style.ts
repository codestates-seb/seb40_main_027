import styled from 'styled-components';

export const Container = styled.div<{ position: string }>`
  font-size: calc(12 / 16 * 1rem);
  display: flex;
  justify-content: ${({ position }) => {
    switch (position) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  align-items: flex-start;
  margin-bottom: calc(-5 / 16 * 1rem);

  & > *:not(:last-child) {
    margin-right: 0.2rem;
  }

  span {
    padding-top: calc(3 / 16 * 1rem);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: calc(-3 / 16 * 1rem);
  }
`;
