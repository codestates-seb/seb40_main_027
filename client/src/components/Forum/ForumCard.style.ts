import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
  width: 100%;
  height: calc(400 / 16 * 1rem);
  padding: calc(20 / 16 * 1rem);
  border: 1px solid var(--grayContentsBorder);
  border-radius: calc(9 / 16 * 1rem);

  .desktop {
    display: flex;
  }
  .mobile {
    display: none;
  }

  & > * > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    height: auto;
    padding: calc(10 / 16 * 1rem);
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--grayContentsBorder);

    &:first-child {
      border-top: 1px solid var(--grayContentsBorder);
    }

    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TagsContainer = styled.div`
  & > button {
    width: calc(71 / 16 * 1rem);
  }

  & > button:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    & > button {
      width: calc(63 / 16 * 1rem);
    }
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: calc(18 / 16 * 1rem);
`;

export const WrittenInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeContainer = styled.div`
  font-size: calc(12 / 16 * 1rem);
  display: flex;
  align-items: flex-start;

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
`;

export const Content = styled.div`
  font-size: calc(14 / 16 * 1rem);
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;
