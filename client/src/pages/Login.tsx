import * as S from './Login.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import { LogPageBtn } from '../components/Button';
import { useLogIn } from '../hooks/useUsers';
import { Link, useNavigate } from 'react-router-dom';
// 이메일과 패스워드를 송신하면 유저아이디와 name을 준다. -> 나중에 api와 연동 필요(전송 후, refresh & access 받기)
// help class쪽 link 추후 연결 필요

type Formvalues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Formvalues>();
  const onSubmit: SubmitHandler<Formvalues> = (data) => {
    console.log('submission');
    useLogIn(data);
    navigate('/');
  };

  return (
    <S.LoginWrapp>
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
              <input type="password" {...register('password')} autoComplete="off" />
            </label>
            <LogPageBtn />
          </form>
          <div className="help">
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <Link to="/user/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </S.LoginWrapp>
  );
};
export default Login;
