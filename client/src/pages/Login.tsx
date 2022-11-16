import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import { LogPageBtn } from '../components/Button';

const LoginWrapp = styled.div`
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
        padding: 6rem 15rem;
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

// 이메일과 패스워드를 송신하면 유저아이디와 name을 준다. -> 나중에 api와 연동 필요(전송 후, refresh & access 받기)
// help class쪽 link 추후 연결 필요

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <LoginWrapp>
      <div className="login-inner">
        <img src={logo} alt="logo" />
        <div className="form-wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <div className="indicator">Email</div>
              <input type="email" {...register('email')} />
            </label>
            <label>
              <div className="indicator">Password</div>
              <input type="password" {...register('password')} />
            </label>
            <LogPageBtn />
          </form>
          <div className="help">
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
    </LoginWrapp>
  );
};
export default Login;
