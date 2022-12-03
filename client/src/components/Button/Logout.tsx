import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { logUser } from '../../atoms';
import * as S from './Logout.style';

const Logout = () => {
  const navigate = useNavigate();
  const setLogStatus = useSetRecoilState(logUser);

  const LogoutHandler = () => {
    if (window.confirm('로그아웃을 하시겠습니까?')) {
      axios({
        method: 'post',
        url: '/users/logout',
        headers: {
          Authorization: localStorage.getItem('access'),
        },
      })
        .then(() => {
          setLogStatus({
            isLog: false,
            memberRole: '',
            nickname: '',
          });
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          navigate('/');
          alert('로그아웃이 되었습니다');
        })
        .catch(() => console.log('err'));
    }
  };

  return <S.LogoutButton onClick={LogoutHandler}>로그아웃</S.LogoutButton>;
};

export default Logout;
