import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StyledBorderButton } from '../components/Button/BorderButton';
import styled from 'styled-components';

const WithdrawalButton = styled(StyledBorderButton)`
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;
  color: red;
  border: 1px solid red;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 18px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;

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
      .catch((err) => console.log('err'));
  };

  return <WithdrawalButton onClick={WithdrawalHandler}>회원탈퇴</WithdrawalButton>;
};

export default Withdrawal;
