import styled from 'styled-components';
// import { useForm } from 'react-hook-form';
import logo from '../image/logo.png';

const LoginWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-inner {
    img {
      width: 240px;
      height: 120px;
    }
    .form-wrap {
      margin-left: -1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

// 이메일과 패스워드를 송신하면 유저아이디와 name을 준다

const Login = () => {
  // const { register } = useForm();
  return (
    <LoginWrapp>
      <div className="login-inner">
        <img src={logo} alt="logo" />
        <div className="form-wrap">
          <form>
            <input type="email" />
          </form>
        </div>
      </div>
    </LoginWrapp>
  );
};
export default Login;
