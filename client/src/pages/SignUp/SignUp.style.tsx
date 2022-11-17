import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrap = styled.div`
  width: 60%;
  height: 60%;
  font-size: 30px;
  border: 1px solid var(--greenMain);
  form {
    width: 100%;
    height: 100%;
    display: flex;
    input {
      width: 100%;
    }
  }
`;
