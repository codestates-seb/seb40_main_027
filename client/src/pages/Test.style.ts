import styled from 'styled-components';

export const TestContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 414px) {
    height: 80vh;
  }
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--greenMain);

  height: 80%;
  width: 70%;
  @media screen and (max-width: 414px) {
    height: 60vh;
    width: 100vw;
  }
`;

export const StyleFormCode = styled.div`
  border: 6px double white;
  width: 90%;
  height: 90%;
  display: inline;
  align-items: center;
`;
