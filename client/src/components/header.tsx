import styled from 'styled-components';
import logo from '../image/logo.png';
import { useState } from 'react';
import Nickname from './Nickname';

const HeaderContent = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #d6d6d6;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 150px;
    height: 60px;
  }

  @media screen and (max-width: 414px) and (max-height: 667px) {
    background-color: red;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    header {
      margin-left: 8rem;
      width: 100%;
    }
    img {
      width: 130px;
      height: 60px;
    }
  }
`;

const Header = () => {
  const [islogin, setIslogin] = useState(true);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIslogin(!islogin);
  };
  return (
    <HeaderContent>
      <header>
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
      </header>
    </HeaderContent>
  );
};

export default Header;
