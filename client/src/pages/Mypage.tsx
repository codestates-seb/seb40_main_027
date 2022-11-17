import PageHeader from '../components/Header/PageHeader';
import styled from 'styled-components';
import icon from '../assets/image/icon.png';
import { useState } from 'react';
import MypageSchedule from '../components/Mypage/MypageSchedule';
import MypageList from '../components/Mypage/MypageList';
import { Icon } from '@iconify/react';

import Sidebar from '../components/Header/Sidebar';

const PageSize = styled.div`
  overflow-y: auto;
  transform: all 2s;
`;

const SidebarMap = styled.div`
  transition: rgba(235, 4, 4, 0.38) 0.5s ease-in 0.3s;
`;

const MypageContent = styled.div`
  height: 100vh;
  margin: 0rem 18% 0rem 18%;
  transform: all 2s;
  .tab-menu {
    height: 10%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0rem 5rem 0rem 5rem;
  }
  .tab-content-mobile {
    display: none;
  }
  .page-name {
    font-size: 2em;
    margin: 1rem;
  }
  img {
    display: flex;
    align-items: flex-end;
    width: 8rem;
    height: 50%;
  }
  .icon-wapper {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-left: 1rem;
  }
  .tab-content {
    width: 10rem;
    display: flex;
    flex-direction: row;
  }
  .tab-body {
    height: 10%;
    background-color: var(--greenMain);
    border-radius: 40px 40px 0px 0px;
  }
  .mypage-body {
    display: flex;
    border: 1px solid var(--grayContentsBorder);
  }
  .profile {
    width: 25%;
    border-right: 1px solid var(--grayContentsBorder);
    display: flex;
  }
  .user-profile {
    height: 40%;
    border: 1px solid var(--grayContentsBorder);
    margin: 1rem 1rem 0rem 1rem;
    width: 100%;
  }
  .mypage-view {
    width: 100%;
  }
  .icon-gear {
    display: flex;
    flex-direction: row-reverse;
  }
  .user-picture {
    display: flex;
    width: 100%;
    height: 60%;
    background-color: red;
  }
  .user-info {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    height: 30%;
    align-items: center;
  }
  .user-nickname {
    border: 1px solid var(--grayContentsBorder);
    border-radius: 20px;
    width: 70%;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 414px) {
    margin: 0px;

    .tab-menu {
      display: none;
    }
    .tab-content-mobile {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
    .page-name {
      display: none;
    }
    .icon-wapper {
      display: none;
    }
    img {
      display: none;
    }
    .tab-body {
      display: none;
    }
    .mypage-body {
      margin: 0px;
      display: flex;
      width: 100vw;

      flex-direction: column;
      justify-content: center;
      border: none;
    }
    .profile {
      width: 100vw;
      border: none;
      display: flex;
      justify-content: center;
      z-index: 1;
    }
    .user-profile {
      width: 100vw;
      display: flex;
      flex-direction: row;
      height: 7rem;
      border-radius: 20px;
      margin: 1rem;
    }
    .user-picture {
      height: 100%;
    }
    .user-info {
      height: 100%;
      width: 100%;
    }
    .mypage-view {
    }
    .tab-mobile-bar {
      display: flex;
      background-color: var(--greenMain);
      height: 3rem;
      width: 100%;
    }
  }
`;

const ButtonTab = styled.button`
  border: none;
  height: 2rem;
  width: 6rem;
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) => (props.className === 'tab-button' ? 'var(--greenMain)' : '#a9dbbd')};
`;
const MyPage = () => {
  const [currentTab, setCurrentTab] = useState<any>(0);
  // const [isco, setIsco] = useRecoilState(sidebarFloading);

  const TabHandler = (id: any) => {
    setCurrentTab(id);
  };
  console.log(currentTab);

  const TabMenu = [
    { id: 0, text: '찜한일정' },
    { id: 1, text: '나의 작성글' },
  ];
  return (
    <PageSize>
      <PageHeader />
      <SidebarMap>
        <Sidebar />
      </SidebarMap>
      <MypageContent>
        <div className="tab-menu">
          <span className="page-name">Mypage</span>

          <div className="tab-content">
            {TabMenu.map((el) => (
              <ButtonTab
                key={el.id}
                onClick={() => TabHandler(el.id)}
                // style={currentTab === el.id ?  : {}}
                className={currentTab === el.id ? 'tab-button' : 'tab-not-select'}
              >
                {el.text}
              </ButtonTab>
            ))}
          </div>
        </div>
        <div className="tab-body">
          <div className="icon-wapper">
            <img src={icon} alt="logo" />
          </div>
        </div>
        <div className="mypage-body">
          <div className="profile">
            <div className="user-profile">
              <div className="icon-gear">
                <Icon icon="ph:gear-six-duotone" width="25" height="25" />
              </div>
              <div className="user-picture">사진</div>
              <div className="user-info">
                <div className="user-nickname">nickname</div>
                <div className="user-nickname">email</div>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <div className="tab-content-mobile">
              {TabMenu.map((el) => (
                <ButtonTab
                  key={el.id}
                  onClick={() => TabHandler(el.id)}
                  className={currentTab === el.id ? 'tab-button' : 'tab-not-select'}
                >
                  {el.text}
                </ButtonTab>
              ))}
            </div>
            <div className="tab-mobile-bar"></div>
          </div>
          <div className="mypage-view">{currentTab === 1 ? <MypageList /> : <MypageSchedule />}</div>
        </div>
      </MypageContent>
    </PageSize>
  );
};
export default MyPage;
