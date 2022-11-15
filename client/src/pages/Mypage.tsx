import PageHeader from '../components/Header/PageHeader';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import icon from '../image/icon.png';
import { useState } from 'react';
import MypageSchedule from '../components/MypageSchedule';
import MypageList from '../components/MypageList';

const MypageContent = styled.div`
  height: 90vh;
  margin: 0rem 10rem 0rem 10rem;

  .tab-menu {
    height: 10%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0rem 5rem 0rem 5rem;
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
    border-radius: 20px 20px 0px 0px;
  }
  .mypage-body {
    display: flex;
    flex-grow: 1;
    /* flex-direction: row; */
  }
  .profile {
    width: 25%;
    border: 1px solid var(--grayContentsBorder);
    height: 40rem;
    display: flex;
  }
  .user-profile {
    height: 40%;
    border: 1px solid var(--grayContentsBorder);
    margin: 0rem 1rem 0rem 1rem;
    width: 100%;
  }
  .maypage-view {
    width: 100%;
  }
`;

const ButtonTab = styled.button`
  border: none;
  height: 2rem;
  width: 6rem;
  border-radius: 10px 10px 0px 0px;
  background-color: ${(props) => (props.className === 'tab-button' ? 'var(--greenMain)' : '#a9dbbd')};
`;
const Mypage = () => {
  const [currentTab, setCurrentTab] = useState<any>(0);

  const TabHandler = (id: any) => {
    setCurrentTab(id);
  };
  console.log(currentTab);

  const TabMenu = [
    { id: 0, text: '찜한일정' },
    { id: 1, text: '나의 작성글' },
  ];
  return (
    <div>
      <PageHeader />
      <MypageContent>
        <div className="tab-menu">
          <span className="page-name">Mypage</span>
          <div className="tab-content">
            {TabMenu.map((el) => (
              <ButtonTab
                // className="tab-button"
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
              <span></span>
              <div>
                <div>nickname</div>
                <div>email</div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="maypage-view">{currentTab === 1 ? <MypageList /> : <MypageSchedule />}</div>
        </div>
      </MypageContent>
      <Footer />
    </div>
  );
};
export default Mypage;
