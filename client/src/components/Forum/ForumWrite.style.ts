import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  & > *:not(:last-child) {
    border-bottom: 1px solid var(--grayContentsBorder);
  }
`;

export const ContentHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  padding-bottom: calc(20 / 16 * 1rem);

  & > * {
    height: calc(36 / 16 * 1rem);

    :not(:last-child) {
      margin-right: calc(10 / 16 * 1rem);
    }
  }

  @media screen and (max-width: 414px) {
    padding-bottom: calc(10 / 16 * 1rem);
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: calc(40 / 16 * 1rem);
  border: 0;
  font-size: calc(20 / 16 * 1rem);
`;

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(10 / 16 * 1rem) 0;
`;

export const TagsContainer = styled.div`
  & > button:not(:last-child) {
    margin-right: calc(10 / 16 * 1rem);
  }
`;

export const ContentTextarea = styled.textarea`
  width: 100%;
  height: calc(500 / 16 * 1rem);
  border: 0;
  font-size: calc(16 / 16 * 1rem);
`;

export const ContentFooter = styled(ContentHeader)`
  padding-top: calc(20 / 16 * 1rem);
  padding-bottom: 0;

  @media screen and (max-width: 414px) {
    padding-top: calc(10 / 16 * 1rem);
  }
`;
