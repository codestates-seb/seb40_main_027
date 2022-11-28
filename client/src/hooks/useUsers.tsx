import axios from 'axios';

interface LogInType {
  email: string;
  password: string;
}

export const useLogIn = (submitData: LogInType, setNickname: React.Dispatch<React.SetStateAction<string>>) => {
  axios({
    method: 'post',
    url: `/users/login`,
    data: {
      email: submitData.email,
      password: submitData.password,
    },
  })
    .then((response) => {
      setNickname(response.data.nickname);
      const access = response.headers.authorization!;
      const refresh = response.headers.refresh || '';
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
    })
    .catch((err) => alert('로그인 실패'));
  return 'success';
};

// interface SignUpType {
//   email: string;
//   nickname: string;
//   password: string;
// }
// export const useSignUp = (submitData: SignUpType) => {
//   axios({
//     method: 'post',
//     url: `/users/signup`,
//     data: {
//       email: submitData.email,
//       nickname: submitData.nickname,
//       password: submitData.password,
//     },
//   })
//     .then((response) => {
//       alert('로그인 성공');
//     })
//     .catch((err) => alert(err));
//   return 'success';
// };
