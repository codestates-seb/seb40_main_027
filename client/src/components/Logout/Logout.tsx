import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Logout.style';

const Logout = () => {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    if (window.confirm('로그아웃을 하시겠습니까?')) {
      axios({
        method: 'post',
        url: '/users/logout',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ4MTI0OSwiZXhwIjoxNjY5NTI0NDQ5fQ.Fwfii5XFjTe_6W9Zm20h8rDG0Wvrr-EEBOI7sLQl9rJiwNPAPeEJBRk4DkkEAZwoLkeZvgPQZcYHbNBbM1S-TQ',
        },
      })
        .then(() => {
          navigate('/');
          console.log('로그아웃이 됨');
          alert('로그아웃이 되었습니다');
        })
        .catch(() => console.log('err'));
    }
  };

  return (
    <div>
      <S.LogoutButton onClick={LogoutHandler}>로그아웃</S.LogoutButton>
    </div>
  );
};

export default Logout;
