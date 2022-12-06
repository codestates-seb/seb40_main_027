import styled from 'styled-components';

export const TestContent = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100;
  margin: 0 10% 0 10%;

  @media screen and (max-width: 414px) {
    height: 100vh;
    margin: 0;
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
  border: 6px double var(--whiteBackground);
  width: 90%;
  height: 90%;
  display: inline;
  align-items: center;
`;
