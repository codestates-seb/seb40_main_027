import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Logout.style';

const Logout = () => {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    axios({
      method: 'post',
      url: '/users/logout',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTE4MTg3NywiZXhwIjoxNjY5MjI1MDc3fQ.YZIFOGbutYKeFh3UKwOcFwfuVu7Azj6waCoh5D_2JmQ84oSdZ7YI3ODtZvHP2pMTydSp9dFK4voAu4moqWKbLw',
      },
    })
      .then(() => {
        navigate('/');
        alert('로그아웃이 되었습니다');
      })
      .catch(() => console.log('err'));
  };

  return (
    <div>
      <S.LogoutButton onClick={LogoutHandler}>로그아웃</S.LogoutButton>
    </div>
  );
};

export default Logout;
