import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

interface LoginType {
  email: string;
  password: string;
}
interface LogStatus {
  isLog: boolean;
  memberRole: string;
  nickname: string;
}
export const userLogin = (
  submitData: LoginType,
  navigate: NavigateFunction,
  setLogStatus: React.Dispatch<React.SetStateAction<LogStatus>>
) => {
  axios({
    method: 'post',
    url: `/users/login`,
    data: {
      email: submitData.email,
      password: submitData.password,
    },
  })
    .then((response) => {
      setLogStatus({
        isLog: true,
        memberRole: response.data.member_role,
        nickname: response.data.nickname,
      });
      const access = response.headers.authorization!;
      const refresh = response.headers.refresh ?? '';
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      navigate('/');
    })
    .catch((err) => alert(`로그인 실패 ${err}`));
  return 'success';
};

interface SignUpType {
  email: string;
  nickname: string;
  password: string;
}
export const userSignUp = (submitData: SignUpType, navigate: NavigateFunction) => {
  axios({
    method: 'post',
    url: `/users/signup`,
    data: {
      email: submitData.email,
      nickname: submitData.nickname,
      password: submitData.password,
    },
  })
    .then(() => {
      alert(`회원가입 성공`);
      navigate('/users/login');
    })
    .catch((err) => alert(`로그인 실패 ${err}`));
  return 'success';
};
