import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledBackgroundButton } from '../components/Button/BackgroundButton';

const LogoutButton = styled(StyledBackgroundButton)`
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;
  @media screen and (max-width: 414px) {
    width: 70px;
    height: 30px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;
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
      .catch((err) => console.log('err'));
  };

  return (
    <div>
      <LogoutButton onClick={LogoutHandler}>로그아웃</LogoutButton>
    </div>
  );
};

export default Logout;
