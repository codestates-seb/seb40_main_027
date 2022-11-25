import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Withdrawal.style';

const Withdrawal = () => {
  const navigate = useNavigate();

  const WithdrawalHandler = () => {
    axios({
      method: 'delete',
      url: '/users',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTE4MTg3NywiZXhwIjoxNjY5MjI1MDc3fQ.YZIFOGbutYKeFh3UKwOcFwfuVu7Azj6waCoh5D_2JmQ84oSdZ7YI3ODtZvHP2pMTydSp9dFK4voAu4moqWKbLw',
      },
    })
      .then(() => {
        navigate('/');
        alert('회원탈퇴가 되었습니다');
      })
      .catch(() => console.log('err'));
  };

  return <S.WithdrawalButton onClick={WithdrawalHandler}>회원탈퇴</S.WithdrawalButton>;
};

export default Withdrawal;
