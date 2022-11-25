import * as S from './SignUp.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import icon from '../assets/image/icon.png';
import { RegisterButton } from '../components/Button';
// import { useSignUp } from '../hooks/useUsers';

const textList = [
  { id: 1, desc: 'Nickname', regist: 'nickname', type: 'text' },
  { id: 2, desc: 'Email', regist: 'email', type: 'text' },
  { id: 3, desc: 'Password', regist: 'password', type: 'password' },
  { id: 4, desc: 'Password 확인', regist: 'passwrodCheck', type: 'password' },
];

type SignUpValue = {
  email: string;
  nickname: string;
  password: string;
  passwrodCheck: string;
  check: boolean;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<SignUpValue>();
  const onSubmit: SubmitHandler<SignUpValue> = (data) => {};

  return (
    <S.Wrap>
      <img src={logo} alt="logo" />
      <S.FormWrap>
        <S.GreenTxtBrd>회원가입</S.GreenTxtBrd>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.TypeSection>
            <div>
              {/* <label>
                <S.CustomH2>Nickname</S.CustomH2>
                <input type="text" {...register('nickname')} />
              </label>
              <label>
                <S.CustomH2>Email</S.CustomH2>
                <input type="text" {...register('email')} />
              </label>
              <label>
                <S.CustomH2>Password</S.CustomH2>
                <input type="password" autoComplete="off" {...register('password')} />
              </label>
              <label>
                <S.CustomH2>Password 확인</S.CustomH2>
                <input type="password" autoComplete="off" {...register('passwrodCheck')} />
              </label> */}
              {textList.map((el) =>
                el.id >= 3 ? (
                  <label key={el.id}>
                    <S.CustomH2>{el.desc}</S.CustomH2>
                    <input
                      type={el.type}
                      {...register(el.regist === 'password' ? 'password' : 'passwrodCheck')}
                      autoComplete="off"
                    />
                  </label>
                ) : (
                  <label key={el.id}>
                    <S.CustomH2>{el.desc}</S.CustomH2>
                    <input type={el.type} {...register(el.regist === 'email' ? 'email' : 'nickname')} />
                  </label>
                )
              )}
            </div>
            <S.AgreeForm>
              <img src={icon} alt="icon" />
              <S.CustomH2>약관 내용</S.CustomH2>
              <div>개인정보 수집 및 이용에 대한 안내에 동의합니다</div>
              <input type="checkbox" {...register('check')} />
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
