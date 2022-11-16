import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';

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
    }
  }
`;

// 이메일과 패스워드를 송신하면 유저아이디와 name을 준다

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
              Email
              <input {...register('email')} />
              {/* <input type="submit" /> */}
            </label>
            <label>
              Password
              <input {...register('password')} />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </LoginWrapp>
  );
};
export default Login;
