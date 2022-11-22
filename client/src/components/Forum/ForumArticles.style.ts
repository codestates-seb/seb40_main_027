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

export const ContentHeader = styled.section`
  display: flex;
  justify-content: space-between;
  height: calc(36 / 16 * 1rem);

  & > *:not(:last-child) {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: calc(70 / 16 * 1rem);

    & > *:not(:last-child) {
      margin-bottom: 0;
    }

    & > div:last-child {
      margin-bottom: calc(10 / 16 * 1rem);

      & > form {
        width: calc(100% - (176 / 16 * 1rem));
      }
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }
`;

export const OtherContainer = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }
`;
