import styled from 'styled-components';
import logo from '../image/logo.png';
import { useState } from 'react';
import Nickname from './Nickname';

const HeaderLine = styled.div`
  border-bottom: 1px solid #d6d6d6;

  @media all and (max-width: 4400px) and (max-height: 480px) {
    background-color: red;
  }
`;

const HeaderContent = styled.header`
  /* width: 1160px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;

  @media all and (max-width: 320px) and (max-height: 480px) {
    background-color: red;
  }
  img {
    width: 130px;
    height: 50px;
  }
`;

const Header = () => {
  const [islogin, setIslogin] = useState(false);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIslogin(!islogin);
  };
  return (
    <HeaderLine>
      <HeaderContent>
        <img src={logo} alt="logo" />
        {islogin ? (
          <div>
            <button onClick={clickLogin}>로그인</button>
            <button>회원가입</button>
          </div>
        ) : (
          <div>
            <Nickname />
          </div>
        )}
      </HeaderContent>
    </HeaderLine>
  );
};

export default Header;
