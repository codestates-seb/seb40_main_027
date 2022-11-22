import styled from 'styled-components';

export const Container = styled.section`
  & > *:first-child {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  & > *:last-child {
    padding-top: calc(20 / 16 * 1rem);
  }

  & > *:not(:first-child) {
    border-top: 1px solid var(--grayContentsBorder);
  }

  @media screen and (max-width: 414px) {
    & > *:first-child {
      margin-bottom: calc(10 / 16 * 1rem);
    }

    & > *:last-child {
      padding-top: calc(10 / 16 * 1rem);
    }
  }
`;

export const ContentHeader = styled.section`
  & > button {
    height: calc(36 / 16 * 1rem);
  }
`;

export const ContentContainer = styled.section`
  font-size: calc(16 / 16 * 1rem);

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--grayContentsBorder);
  }
`;

export const TitleInfoContainer = styled.div`
  padding: calc(20 / 16 * 1rem);

  & > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const TagsContainer = styled.div`
  & > button:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: calc(20 / 16 * 1rem);
`;

export const Content = styled.p`
  padding: calc(20 / 16 * 1rem);

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const LikeContainer = styled.div`
  padding: calc(10 / 16 * 1rem) calc(20 / 16 * 1rem);

  & > span:not(:last-child) {
    margin-right: calc(20 / 16 * 1rem);
  }

  & > span > *:not(:last-child) {
    margin-right: 0.2rem;
  }

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const CommentsContainer = styled.section`
  & > * > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }
`;

export const CommentContainer = styled.section`
  padding: calc(10 / 16 * 1rem) calc(20 / 16 * 1rem);
  border-bottom: 1px solid var(--grayContentsBorder);

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const CommentInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewCommentContainer = styled.section`
  padding: calc(10 / 16 * 1rem) calc(20 / 16 * 1rem);

  & > div:first-child {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 414px) {
    padding: calc(10 / 16 * 1rem);
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    height: fit-content;
    border: 0;
  }

  & > div:last-child {
    display: flex;
    flex-direction: row-reverse;
  }

  & > *:not(:first-child) {
    margin-top: calc(10 / 16 * 1rem);
  }
`;
