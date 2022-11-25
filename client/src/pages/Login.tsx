import * as S from './Login.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import { LogPageBtn } from '../components/Button';
import { useLogIn } from '../hooks/useUsers';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLogin } from '../atoms';

// 이메일과 패스워드를 송신하면 유저아이디와 name을 준다. -> 나중에 api와 연동 필요(전송 후, refresh & access 받기)
// help class쪽 link 추후 연결 필요

type LoginValue = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [logStatus, setLogStatus] = useRecoilState(isLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValue>();

  const onSubmit: SubmitHandler<LoginValue> = (data) => {
    console.log('submission');
    useLogIn(data);
    console.log('done');
    console.log('prev', logStatus);
    setLogStatus(!logStatus);
    console.log('after', logStatus);
    navigate('/');
  };

  return (
    <S.LoginWrapp>
      <div className="login-inner">
        <img src={logo} alt="logo" />
        <div className="form-wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="indicator">Email</div>
            <input
              type="text"
              {...register('email', {
                required: '아이디를 입력해주세요',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: '이메일 형식으로 입력해주세요',
                },
              })}
              placeholder="이메일을 입력하세요"
            />
            <p>{errors?.email?.message}</p>
            <div className="indicator">Password</div>
            <input
              type="password"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 4,
                  message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                },
                maxLength: {
                  value: 20,
                  message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
                  message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                },
              })}
              placeholder="비밀번호를 입력하세요"
              autoComplete="off"
            />
            <p>{errors?.password?.message}</p>
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
