import axios from 'axios';

interface LogInType {
  email: 'string';
  password: 'string';
}

interface SignUpType {
  email: string;
  nickname: string;
  password: string;
}

export const useLogIn = (submitData: LogInType) => {
  axios({
    method: 'post',
    url: `/users/login`,
    data: {
      email: submitData.email,
      password: submitData.password,
    },
  })
    .then((response: any) => {
      console.log(response);
      const access = response.headers.authorization;
      const refresh = response.headers.refresh;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.getItem('access');
    })
    .catch((err) => alert(err));
  return 'success';
};

export const useSignUp = (submitData: SignUpType) => {};
