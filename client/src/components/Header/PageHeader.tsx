import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import Nickname from './Nickname';
import { Icon } from '@iconify/react';
import { RegisterButton, LoginButton } from '../Button/index';
import { useRecoilState } from 'recoil';
import { sideBarFloading } from '../../atoms/index';

const PageMenu = styled.header`
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid var(--grayHeaderBorder);
  display: flex;
  justify-content: center;
  align-items: center;
  .page-header-content {
    /* width: 60vw; */
    /* margin: 0 calc(400 / 20 * 1rem) 0 calc(400 / 20 * 1rem); */ //고치신거랑 합쳐서서 확인해봐야함
    /* margin-left: 380px;
    margin-left: 380px; */
    width: 1160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .page-menu {
    margin: 10px;
    display: flex;
    flex-direction: row;
  }
  .hamburger {
    display: none;
  }
  img {
    margin-top: 4px;
    width: 150px;
    height: 60px;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .page-header-content {
      margin: 0px 1px 0px 10px;
      width: 100%;
    }
    img {
      margin-left: 3rem;
      width: 120px;
      height: 60px;
    }
    .page-menu {
      display: none;
      font-size: 1rem;
    }
    .hamburger {
      display: flex;
      width: 50px;
      justify-content: center;
    }
  }
`;
const LoginSignHeaderButton = styled.span`
  display: flex;
  flex-direction: row;
`;

const PageHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isCollapse, setIsCollapse] = useRecoilState(sideBarFloading);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIsLogin(!isLogin);
  };

  const CollapseHandler = () => {
    //상태변하게 하기위하여
    setIsCollapse(!isCollapse);
  };
  const headerMenu = ['분야선택', '로드맵', '학원일정', '수료후기', '스터디모집', '멘토링'];
  return (
    <PageMenu>
      <div className="page-header-content">
        <span className="hamburger">
          <Icon icon="mdi:menu" onClick={CollapseHandler} />
        </span>
        <img src={logo} alt="logo" />
        {headerMenu.map((el, idx) => (
          <span className="page-menu" key={idx}>
            {el}
          </span>
        ))}
        {isLogin ? (
          <LoginSignHeaderButton>
            <LoginButton onClick={clickLogin} />
            <RegisterButton />
          </LoginSignHeaderButton>
        ) : (
          <span>
            <Nickname />
          </span>
        )}
      </div>
    </PageMenu>
  );
};
export default PageHeader;
