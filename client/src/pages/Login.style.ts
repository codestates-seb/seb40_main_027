import styled from 'styled-components';

export const LoginWrapp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 240px;
      height: 120px;
    }
    .form-wrap {
      margin-left: -1rem;
      box-sizing: border-box;
      font-size: 30px;
      form {
        border: 1px solid var(--greenMain);
        padding: calc(100vh * 0.1) calc(100vw * 0.12);
        display: flex;
        flex-direction: column;
        input {
          width: 280px;
          height: 48px;
          border-radius: 10px;
          margin: 1rem 0;
          font-size: 1.3rem;
        }
      }
      .help {
        display: flex;
        justify-content: space-evenly;
        margin-top: 1rem;
        font-size: 19px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    width: 100vw;
    .login-inner {
      img {
        margin-bottom: 10%;
      }
      .form-wrap {
        margin-left: 0;
        font-size: 20px;
        max-width: 414px;
        form {
          padding: 1rem calc(100vw * 0.8 * 0.15);
          label {
            input {
              width: 230px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;
