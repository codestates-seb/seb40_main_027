import * as S from './SignUp.style';
import { useForm } from 'react-hook-form';
import logo from '../../assets/image/logo.png';

const textList = [
  { id: 1, value: 'Nickname', type: 'text' },
  { id: 2, value: 'Email', type: 'email' },
  { id: 3, value: 'Password', type: 'password' },
  { id: 4, value: 'Password 확인', type: 'password' },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSumbit = (data: any) => console.log(data);

  return (
    <S.Wrap>
      <img src={logo} alt="logo" />
      <S.FormWrap>
        {/* 커다란 폼 안에 입력, 약관, 회원가입 버튼이 전부 존재 해야 함 */}
        <form onSubmit={handleSubmit(onSumbit)}>
          <section>
            {textList.map((el) => (
              <label key={el.id}>
                <div>{el.value}</div>
                <input type={el.type} {...register(el.value)} />
              </label>
            ))}
          </section>
          <section>
            <span>테스트 글자</span>
          </section>
          <button>가입하기</button>
        </form>
      </S.FormWrap>
    </S.Wrap>
  );
};
export default SignUp;
