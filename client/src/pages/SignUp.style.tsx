import styled from 'styled-components';
import theme from '../styles/theme';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${theme.mobile} {
    img {
      width: 35%;
      height: 8%;
    }
  }
`;

export const FormWrap = styled.div`
  width: 60%;
  height: 60%;
  font-size: 30px;
  form {
    border: 1px solid var(--greenMain);
    margin-top: 2%;
    width: 100%;
    height: 100%;
  }
  @media ${theme.mobile} {
    height: 45%;
  }
`;

export const greenTxtBrd = styled.div`
  border: 1px solid var(--greenMain);
  background-color: var(--whiteBackground);
  color: var(--greenMain);
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 18px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;

export const TypeSection = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label {
      width: 70%;
      h2 {
        width: 100%;
      }
      input {
        width: 100%;
        height: 40%;
        margin: 3% 0 10% 0;
        font-size: 1.3rem;
      }
    }
  }
  @media ${theme.mobile} {
    input {
      font-size: 1.3vh !important;
    }
  }
`;

export const CustomH2 = styled.h2`
  margin-left: 0;
  margin-right: 0;
  font-size: 2vh;
  font-weight: bold;
  @media ${theme.mobile} {
    font-size: 1.61vh;
  }
`;

export const AgreeFrom = styled.form`
  width: 90% !important;
  height: 90% !important;
  margin-top: 0 !important;
  margin-right: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 9rem;
    height: 4rem;
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  div {
    width: 85%;
    height: auto;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media ${theme.mobile} {
    display: none;
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
  button {
    height: 3vh;
    width: 200px;
  }
`;
