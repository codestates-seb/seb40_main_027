import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import Nickname from './Nickname';
import { Icon } from '@iconify/react';
import { RegisterButton, LoginButton } from '../Button/index';
import Sidebar from './Sidebar';
import { useRecoilState } from 'recoil';
import { sidebarFloading } from '../../atoms/index';

// const Collapse = styled.div`
//   background-size: cover;
//   background-color: #fbd2d2;
//   width: 50%;
//   height: 60rem;
//   z-index: 2;
//   position: absolute;
//   margin: 0%;
//   display: flex;
// `;

const PageMenu = styled.header`
  position: relative;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid var(--grayHeaderBorder);
  justify-content: space-between;
  .page-header-content {
    margin-left: 13rem; //380px로 하니 1980에서는 잘보였는데 제화면에서 너무 이상해 우선 rem으로 변경 =>px로할지 질문
    margin-right: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .page-menu {
    margin: 10px;
  }
  .hamburger {
    display: none;
  }
  img {
    width: 150px;
    height: 60px;
  }
  .sidebar-pra {
    display: none;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .page-header-content {
      margin: 0px 10px 0px 10px;
      width: 100%;
    }
    img {
      margin-left: 20px;
      width: 120px;
      height: 60px;
    }
    .page-menu {
      display: none;
    }
    .hamburger {
      display: flex;
      width: 50px;
      justify-content: center;
      /* & :active {
        .sidebar-pra {
          display: flex;
          height: 100%;
          width: 100%;
          background-color: black;
        }
      } */
    }
    /* .sidebar-pra {
      display: flex;
      height: 100vh;
      width: 50vw;
      background-color: black;
      z-index: 1;
    } */
  }
`;

const PageHeader = () => {
  const [islogin, setIslogin] = useState(true);
  const [iscollapse, setIscollapse] = useRecoilState(sidebarFloading);

  const clickLogin = () => {
    //임의로 오류안나게하기 위해 넣은 함수
    setIslogin(!islogin);
  };
  // console.log(iscollapse);
  const CollapseHandler = () => {
    setIscollapse(!iscollapse);
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
        {islogin ? (
          <span>
            {/* <button onClick={clickLogin}>로그인</button> */}
            <LoginButton onClick={clickLogin} />
            <RegisterButton />
          </span>
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
