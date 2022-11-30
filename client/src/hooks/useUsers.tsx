import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { RecoilState } from 'recoil';

interface LogInType {
  email: string;
  password: string;
}
interface LogStatus {
  isLog: boolean;
  member_role: string;
  nickname: string;
}
export const useLogIn = (
  submitData: LogInType,
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
        member_role: response.data.member_role,
        nickname: response.data.nickname,
      });
      const access = response.headers.authorization!;
      const refresh = response.headers.refresh || '';
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
export const useSignUp = (submitData: SignUpType, navigate: NavigateFunction) => {
  axios({
    method: 'post',
    url: `/users/signup`,
    data: {
      email: submitData.email,
      nickname: submitData.nickname,
      password: submitData.password,
    },
  })
    .then((response) => {
      alert(`로그인 성공 ${response}`);
      navigate('/users/login');
    })
    .catch((err) => alert(`로그인 실패 ${err}`));
  return 'success';
};