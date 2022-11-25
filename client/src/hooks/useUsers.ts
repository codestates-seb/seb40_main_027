import axios from 'axios';
// import { useRecoilState } from 'recoil';
// import { isLogin } from '../atoms/index';

interface LogInType {
  email: string;
  password: string;
}

interface SignUpType {
  email: string;
  nickname: string;
  password: string;
}

export const useLogIn = (submitData: LogInType) => {
  // 작동 잘 되는데 서버 올라오면 test하기
  // const [logState, setLogState] = useRecoilState(isLogin);
  axios({
    method: 'post',
    url: `/users/login`,
    data: {
      email: submitData.email,
      password: submitData.password,
    },
  })
    .then((response) => {
      console.log(response);
      //Type 'string | undefined' is not assignable to type 'string'.
      const access = response.headers.authorization!;
      const refresh = response.headers.refresh || '';
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      // console.log('access', access);
      // setLogState(!logState);
      // console.log(logState);
    })
    .catch((err) => alert(err));
  return 'success';
};

export const useSignUp = (submitData: SignUpType) => {
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
      alert('로그인 성공');
    })
    .catch((err) => alert(err));
  return 'success';
};
