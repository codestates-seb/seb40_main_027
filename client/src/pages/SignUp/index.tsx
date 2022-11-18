import * as S from './SignUp.style';
import { useForm } from 'react-hook-form';
import logo from '../../assets/image/logo.png';
// import { useState } from 'react';

const textList = [
  { id: 1, value: 'Nickname', type: 'text' },
  { id: 2, value: 'Email', type: 'email' },
  { id: 3, value: 'Password', type: 'password' },
  { id: 4, value: 'Password 확인', type: 'password' },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSumbit = (data: any) => console.log(data);
  // const [isChck, setIsCheck] = useState(false);

  return (
    <S.Wrap>
      <img src={logo} alt="logo" />
      <S.FormWrap>
        <S.greenTxtBrd>회원가입</S.greenTxtBrd>
        <form onSubmit={handleSubmit(onSumbit)}>
          <S.TypeSection>
            <div>
              {textList.map((el) => (
                <label key={el.id}>
                  <S.customH2>{el.value}</S.customH2>
                  <input type={el.type} {...register(el.value)} />
                </label>
              ))}
            </div>
            <div>
              <form>
                <input type="checkbox" {...register('agree')} />
              </form>
            </div>
          </S.TypeSection>
          <S.SubmitSection>
            <button>가입하기</button>
          </S.SubmitSection>
        </form>
      </S.FormWrap>
    </S.Wrap>
  );
};
export default SignUp;
