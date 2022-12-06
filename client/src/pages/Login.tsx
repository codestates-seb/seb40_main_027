import * as S from './Login.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import { LogPageBtn } from '../components/Button';
import { userLogin } from '../utils/api/userAPI';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { logUser } from '../atoms';

interface LoginValue {
  email: string;
  password: string;
}
const Login = () => {
  const setLogStatus = useSetRecoilState(logUser);
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValue>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginValue> = async (data) => {
    userLogin(data, setLogStatus, navigate, state);
  };

  return (
    <S.LoginWrapp>
      <div className="login-inner">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="form-wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <S.CustomH2>Email</S.CustomH2>
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
            </label>
            <p>{errors?.email?.message}</p>
            <label>
              <S.CustomH2>Password</S.CustomH2>
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
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,20}$/,
                    message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                  },
                })}
                placeholder="비밀번호를 입력하세요"
                autoComplete="off"
              />
            </label>
            <p>{errors?.password?.message}</p>
            <LogPageBtn />
          </form>
          <div className="help">
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <Link to="/users/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </S.LoginWrapp>
  );
};
export default Login;
