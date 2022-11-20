import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import { useState } from 'react';
import Nickname from './Nickname';
import { RegisterButton, LoginButton } from '../Button/index';

const HeaderContent = styled.header`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid var(--grayHeaderBorder);

  .header-component {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 150px;
    height: 60px;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .header-component {
      margin-left: 7.5rem;
      width: 100%;
    }
    img {
      width: 140px;
      height: 60px;
    }
  }
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIsLogin(!isLogin);
  };
  return (
    <HeaderContent>
      <div className="header-component">
        <img src={logo} alt="logo" />
        {isLogin ? (
          <div>
            <LoginButton onClick={clickLogin} />
            <RegisterButton />
          </div>
        ) : (
          <div>
            <Nickname />
          </div>
        )}
      </div>
    </HeaderContent>
  );
};

export default Header;
