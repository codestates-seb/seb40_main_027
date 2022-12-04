import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Withdrawal.style';
import Swal from 'sweetalert2';
const Withdrawal = () => {
  const navigate = useNavigate();

  const WithdrawalHandler = () => {
    const access = localStorage.getItem('access');
    if (window.confirm('회원탈퇴를 하시겠습니까?')) {
      axios({
        method: 'delete',
        url: '/users',
        headers: {
          Authorization: access,
        },
      })
        .then(() => {
          navigate('/');
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '탈퇴되었습니다',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(`"err":${err}`);
        });
    }
  };

  return <S.WithdrawalButton onClick={WithdrawalHandler}>회원탈퇴</S.WithdrawalButton>;
};

export default Withdrawal;
