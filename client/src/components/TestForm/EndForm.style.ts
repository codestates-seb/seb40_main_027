import styled from 'styled-components';

export const ResultEndFormContent = styled.div`
  .font-Result-title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: var(--whiteBackground);
    margin: 1rem;
  }

  .font-result-view {
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
  width: 100%;
  margin-top: 1rem;
  font-size: large;
  font-weight: 500;
`;
