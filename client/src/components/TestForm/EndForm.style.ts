import styled from 'styled-components';

export const ResultEndFormContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  & > * {
    margin-top: 2rem;
  }
  .font-result-title {
    display: flex;
    font-size: 2.5rem;
    justify-content: center;
    margin: 0;

    color: var(--whiteBackground);
  }
  .font-real {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .font-result-view {
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .return-content {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 414px) {
    margin: 0;
    .return-content {
      margin: 0;
    }
  }
`;

export const FrontPicture = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: inline;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const ResultBottomFrom = styled.div`
  display: flex;
  background-color: aquamarine;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  font-size: large;
  font-weight: 500;
  height: 2rem;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 414px) {
    margin: 0;
  }
`;

export const ReturnButton = styled.button`
  border: none;
`;
