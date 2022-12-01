import * as S from './SignUp.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import icon from '../assets/image/icon.png';
import { RegisterButton } from '../components/Button';
import { userSignUp } from '../utils/api/userAPI';
import { useNavigate } from 'react-router-dom';

type SignUpValue = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  check: boolean;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpValue>({ mode: 'onBlur' });
  const watchPassword = watch('password', '');
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpValue> = async (data) => {
    userSignUp(data, navigate);
  };

  return (
    <S.Wrap>
      <img src={logo} alt="logo" />
      <S.FormWrap>
        <S.GreenTxtBrd>회원가입</S.GreenTxtBrd>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.TypeSection>
            <div>
              <label>
                <S.CustomH2>Nickname</S.CustomH2>
                <input
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                  {...register('nickname', {
                    required: true,
                    pattern: {
                      value: /^[A-za-z0-9]{3,10}$/,
                      message: '숫자 및 영어로 3자 이상 10지 이하로 작성해주세요',
                    },
                  })}
                />
              </label>
              <S.ErrMsg>{errors.nickname?.message}</S.ErrMsg>
              <label>
                <S.CustomH2>Email</S.CustomH2>
                <input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: '이메일 형식으로 입력해주세요',
                    },
                  })}
                />
              </label>
              <S.ErrMsg>{errors.email?.message}</S.ErrMsg>
              <label>
                <S.CustomH2>Password</S.CustomH2>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="off"
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
                />
              </label>
              <S.ErrMsg>{errors.password?.message}</S.ErrMsg>
              <label>
                <S.CustomH2>Password 확인</S.CustomH2>
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="비밀번호를 확인해주세요"
                  {...register('passwordCheck', {
                    required: '비밀번호를 확인해주세요',
                    validate: (value) => value === watchPassword || '비밀번호가 일치하지 않습니다',
                  })}
                />
              </label>
              <S.ErrMsg>{errors.passwordCheck?.message}</S.ErrMsg>
            </div>
            <S.AgreeForm>
              <img src={icon} alt="icon" />
              <S.CustomH2>약관 내용(필수)</S.CustomH2>
              <div>개인정보 수집 및 이용에 대한 안내에 동의합니다</div>
              <input
                type="checkbox"
                {...register('check', {
                  validate: (value) => value === true || '개인정보 수집을 동의해주세요',
                })}
              />
              <S.ErrMsg>{errors.check?.message}</S.ErrMsg>
            </S.AgreeForm>
          </S.TypeSection>
          <S.SubmitSection>
            <RegisterButton text="가입하기" />
          </S.SubmitSection>
        </form>
      </S.FormWrap>
    </S.Wrap>
  );
};
export default SignUp;
