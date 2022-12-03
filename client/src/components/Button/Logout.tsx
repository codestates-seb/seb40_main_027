import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { logUser } from '../../atoms';
import * as S from './Logout.style';
import Swal from 'sweetalert2';

const Logout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
          navigate(`${pathname}`);
          Swal.fire({
            icon: 'success',
            title: '로그아웃 되었습니다',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => console.log('err'));
    }
  };

  return <S.LogoutButton onClick={LogoutHandler}>로그아웃</S.LogoutButton>;
};

export default Logout;
