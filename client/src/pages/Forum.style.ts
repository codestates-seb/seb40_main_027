import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  & > * {
    margin-bottom: calc(20 / 16 * 1rem);

    @media screen and (max-width: 414px) {
      margin-bottom: calc(10 / 16 * 1rem);
    }
  }
`;

export const FlexContainer = styled.section`
  width: 1160px;
  margin: calc(20 / 16 * 1rem) auto;
  display: flex;

  @media screen and (max-width: 414px) {
    width: calc(100% - 20 / 16 * 1rem);
    margin: calc(10 / 16 * 1rem);
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const ContentWrapper = styled.section`
  width: calc(100% - 197 / 16 * 1rem);

  & > *:not(:last-child) {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    width: calc(100% - 10 / 16 * 1rem);

    & > *:not(:last-child) {
      margin-bottom: calc(10 / 16 * 1rem);
    }
  }
`;

export const ContentHeader = styled.section`
  display: flex;
  justify-content: space-between;
  height: calc(36 / 16 * 1rem);

  & > div {
    display: flex;

    & > *:not(:last-child) {
      margin-right: calc(10 / 16 * 1rem);
    }
  }

  & > *:not(:last-child) {
    margin-bottom: calc(20 / 16 * 1rem);
  }

  @media screen and (max-width: 414px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 70px;

    & > *:not(:last-child) {
      margin-bottom: 0;
    }

    & > div:last-child {
      margin-bottom: 10px;

      & > form {
        width: calc(100% - 176px);
      }
    }
  }
`;
