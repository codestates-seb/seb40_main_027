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
      })
        .then(() => {
          navigate('/');
          console.log('로그아웃이 됨');
          alert('로그아웃이 되었습니다');
        })
        .catch(() => console.log('err'));
    }
  };

  return <S.LogoutButton onClick={LogoutHandler}>로그아웃</S.LogoutButton>;
};

export default Logout;
