import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Withdrawal.style';

const Withdrawal = () => {
  const navigate = useNavigate();

  const WithdrawalHandler = () => {
    if (window.confirm('회원탈퇴를 하시겠습니까?')) {
      axios({
        method: 'delete',
        url: '/users',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiaGVoZUBnbWFpbC5jb20iLCJzdWIiOiJoZWhlQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ0NTA1NiwiZXhwIjoxNjY5NDg4MjU2fQ.xW0VydYPypKjjvOmEdLQjuId0kgiKHThg3GGV6GfktCYr0Q7WnbZZSOiTOt2IHFAH-sAA56lMhzCrC5HcWaTwA',
        },
      })
        .then(() => {
          navigate('/');
          alert('회원탈퇴가 되었습니다');
        })
        .catch(() => console.log('err'));
    }
  };

  return <S.WithdrawalButton onClick={WithdrawalHandler}>회원탈퇴</S.WithdrawalButton>;
};

export default Withdrawal;
