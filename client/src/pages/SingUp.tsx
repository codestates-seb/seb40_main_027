import * as S from './SignUp.style';
import { useForm } from 'react-hook-form';
import logo from '../assets/image/logo.png';
import icon from '../assets/image/icon.png';
// import Modal from '../components/Modal/Modal';
// import { useState } from 'react';

const textList = [
  { id: 1, value: 'Nickname', type: 'text' },
  { id: 2, value: 'Email', type: 'email' },
  { id: 3, value: 'Password', type: 'password' },
  { id: 4, value: 'Password 확인', type: 'password' },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  // const [isOpen, setIsOpen] = useState('false');
  const onSumbit = (data: any) => console.log(data);

  // const onClick = (e: any) => {};

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
                  <S.CustomH2>{el.value}</S.CustomH2>
                  <input type={el.type} {...register(el.value)} />
                </label>
              ))}
            </div>
            <div>
              <S.AgreeFrom>
                <img src={icon} alt="icon" />
                <S.CustomH2>약관 내용</S.CustomH2>
                <div>개인정보 수집 및 이용에 대한 안내에 동의합니다</div>
                <input type="checkbox" {...register('agree')} />
              </S.AgreeFrom>
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
