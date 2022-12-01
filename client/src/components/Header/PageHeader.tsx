import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import Nickname from './Nickname';
import { Icon } from '@iconify/react';
import { RegisterButton, LoginButton } from '../Button/index';

import { useRecoilState, useRecoilValue } from 'recoil';
import { logUser, sideBarFloading } from '../../atoms/index';
import { Link } from 'react-router-dom';

const PageMenu = styled.header`
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid var(--grayHeaderBorder);
  display: flex;
  justify-content: center;
  align-items: center;
  .page-header-content {
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

const HeaderLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
const LoginSignHeaderButton = styled.span`
  display: flex;
  flex-direction: row;
`;

const PageHeader = () => {
  const { isLog } = useRecoilValue(logUser);
  const [isCollapse, setIsCollapse] = useRecoilState(sideBarFloading);

  /** 일단 윤경님 코드 살려놨습니다. 나중에 로그아웃 구현하실 때 필요없으시면 삭제해주시면 됩니다.  **/
  // const clickLogin = () => {
  //   //임의로 오류안나게하기 위해 넣은 함수
  //   setIsLogin(!isLogin);
  // };

  const CollapseHandler = () => {
    //상태변하게 하기위하여
    setIsCollapse(!isCollapse);
  };

  return (
    <PageMenu>
      <div className="page-header-content">
        <span className="hamburger">
          <Icon icon="mdi:menu" onClick={CollapseHandler} />
        </span>
        <HeaderLink to={'/'}>
          <img src={logo} alt="logo" />
        </HeaderLink>
        <HeaderLink to={'/test'}>적성검사</HeaderLink>
        <HeaderLink to={'/'}>로드맵</HeaderLink>
        <HeaderLink to={'/bootcamp'}>학원일정</HeaderLink>
        <HeaderLink to={'/postscript'}>수료후기</HeaderLink>
        <HeaderLink to={'/study'}>스터디모집</HeaderLink>
        <HeaderLink to={'/mentoring'}>멘토링</HeaderLink>
        {isLog ? (
          <span>
            <Nickname />
          </span>
        ) : (
          <LoginSignHeaderButton>
            <Link to="/users/login">
              <LoginButton />
            </Link>
            <Link to="/users/signup">
              <RegisterButton />
            </Link>
          </LoginSignHeaderButton>
        )}
      </div>
    </PageMenu>
  );
};
export default PageHeader;
