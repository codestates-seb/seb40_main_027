import * as S from './SignUp.style';
import { useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import icon from '../assets/image/icon.png';
import { RegisterButton } from '../components/Button';

const textList = [
  { id: 1, value: 'Nickname', type: 'text' },
  { id: 2, value: 'Email', type: 'email' },
  { id: 3, value: 'Password', type: 'password' },
  { id: 4, value: 'Password 확인', type: 'password' },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSumbmit = (data: any) => console.log(data);

  return (
    <S.Wrap>
      <img src={logo} alt="logo" />
      <S.FormWrap>
        <S.greenTxtBrd>회원가입</S.greenTxtBrd>
        <form onSubmit={handleSubmit(onSumbmit)}>
          <S.TypeSection>
            <div>
              {textList.map((el) =>
                el.id >= 3 ? (
                  <label key={el.id}>
                    <S.CustomH2>{el.value}</S.CustomH2>
                    <input type={el.type} {...register(el.value)} autoComplete="off" />
                  </label>
                ) : (
                  <label key={el.id}>
                    <S.CustomH2>{el.value}</S.CustomH2>
                    <input type={el.type} {...register(el.value)} />
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
