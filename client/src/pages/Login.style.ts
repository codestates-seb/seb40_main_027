import styled from 'styled-components';

export const LoginWrapp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
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
        border: 2px solid var(--greenMain);
        border-radius: 10px;
        padding: calc(100vh * 0.1) calc(100vw * 0.12);
        display: flex;
        flex-direction: column;
        p {
          color: var(--redBootDetailHeart);
          width: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8vw;
          word-wrap: break-word;
        }
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
      max-width: 375px;
      img {
        margin-bottom: 10%;
      }
      .form-wrap {
        margin-left: 0;
        font-size: 20px;
        max-width: 414px;
        form {
          border: 1px solid var(--greenMain);
          padding: calc(100vh * 0.8 * 0.1) calc(100vw * 0.8 * 0.15);
          div {
            margin-left: 0.6rem;
          }
          input {
            margin-left: 0.6rem;
            width: 230px;
            font-size: 20px;
          }
          button {
            margin-left: 0.6rem;
          }
          p {
            width: 230px;
            margin-left: 0.6rem;
          }
        }
      }
    }
  }
`;
export const CustomH2 = styled.h2`
  margin-left: 0;
  margin-right: 0;
  font-size: 2.7vh;
  font-weight: bold;
`;
