import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.article`
  padding: calc(20 / 16 * 1rem);
  border-bottom: 1px solid var(--grayContentsBorder);

  &:first-child {
    border-top: 1px solid var(--grayContentsBorder);
  }

  & > * > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TagsContainer = styled.div`
  & > button:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: calc(18 / 16 * 1rem);
`;

export const Content = styled.div`
  font-size: calc(14 / 16 * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;
