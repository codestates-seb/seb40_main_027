import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import Nickname from './Nickname';
import { Icon } from '@iconify/react';
import { RegisterButton, LoginButton } from '../Button/index';

import { useRecoilState, useRecoilValue } from 'recoil';
import { isLogin, sideBarFloading } from '../../atoms/index';
import { Link } from 'react-router-dom';

const PageMenu = styled.header`
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid var(--grayHeaderBorder);
  display: flex;
  justify-content: center;
  align-items: center;
  .page-header-content {
    width: 60vw;
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
  const logStatus = useRecoilValue(isLogin);
  const [isCollapse, setIsCollapse] = useRecoilState(sideBarFloading);

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
        {logStatus ? (
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
