import PageHeader from '../components/Header/PageHeader';
import icon from '../assets/image/icon.png';
import { useState } from 'react';
import MypageSchedule from '../components/MypageContent/MypageSchedule';
import MypageList from '../components/MypageContent/MypageList';
import { Icon } from '@iconify/react';
import * as S from './MyPage.style';

import Sidebar from '../components/MypageContent/Sidebar';

const MyPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const TabHandler = (id: number) => {
    setCurrentTab(id);
  };
  console.log(currentTab);

  const TabMenu = [
    { id: 0, text: '찜한일정' },
    { id: 1, text: '나의 작성글' },
  ];
  return (
    <S.PageSize>
      <PageHeader />

      <Sidebar />

      <S.MypageContent>
        <div className="tab-menu">
          <span className="page-name">Mypage</span>

          <div className="tab-content">
            {TabMenu.map((el) => (
              <S.ButtonTab
                key={el.id}
                onClick={() => TabHandler(el.id)}
                // style={currentTab === el.id ?  : {}}
                className={currentTab === el.id ? 'tab-button' : 'tab-not-select'}
              >
                {el.text}
              </S.ButtonTab>
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
            <div className="tab-content-mobile">
              {TabMenu.map((el) => (
                <S.ButtonTab
                  key={el.id}
                  onClick={() => TabHandler(el.id)}
                  className={currentTab === el.id ? 'tab-button' : 'tab-not-select'}
                >
                  {el.text}
                </S.ButtonTab>
              ))}
            </div>
            <div className="tab-mobile-bar"></div>
          </div>
          <div className="mypage-view">{currentTab === 1 ? <MypageList /> : <MypageSchedule />}</div>
        </div>
      </S.MypageContent>
    </S.PageSize>
  );
};
export default MyPage;
