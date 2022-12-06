import mainbanner from '../assets/image/mainbanner.png';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import mainmobile from '../assets/image/mainmobile.png';
import { Link } from 'react-router-dom';

const MainPage = styled.div`
  height: 90vh;
  overflow-y: scroll;
  #main-big-banner {
    width: 100%;
    margin: 0px;
  }
  #main-small-banner {
    display: none;
  }

  .icon-box {
    margin: 5% 10% 0rem 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-menu-title {
    margin-top: 1rem;
  }

  @media screen and (max-width: 414px) {
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      margin: 30px 0px 0px 40px;
    }

    #main-big-banner {
      display: none;
    }
    #main-small-banner {
      width: 100%;
      display: flex;
    }
  }
`;

const IconContent = styled(Link)`
  background-color: var(--grayListFill);
  height: 8rem;
  width: 11%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 0px 1% 0px 1%;
  text-decoration: none;

  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
    height: 120px;
    margin: 5%;
  }
`;

const Main = () => {
  return (
    <div>
      <MainPage>
        <img id="main-big-banner" src={mainbanner} alt="mainbanner" />
        <img id="main-small-banner" src={mainmobile} alt="mainmobilebanner" />
        <div className="icon-box">
          <IconContent to={'/test'}>
            <Icon icon="fluent:person-question-mark-16-regular" color="var(--greenMain)" width="100%" height="65" />
            <span className="icon-menu-title">적성검사</span>
          </IconContent>
          <IconContent to={'/roadmap'}>
            <Icon icon="zondicons:load-balancer" color="var(--greenMain)" width="80%" height="62" />
            <span className="icon-menu-title">로드맵</span>
          </IconContent>
          <IconContent to={'/bootcamp'}>
            <Icon icon="gridicons:scheduled" color="var(--greenMain)" width="80%" height="72" />
            <span className="icon-menu-title">학원일정</span>
          </IconContent>
          <IconContent to={'/postscript'}>
            <Icon icon="emojione-monotone:left-speech-bubble" color="var(--greenMain)" width="50%" height="50%" />
            <span className="icon-menu-title">수료후기</span>
          </IconContent>
          <IconContent to={'/study'}>
            <Icon icon="eos-icons:machine-learning" color="var(--greenMain)" width="50%" height="50%" />
            <span className="icon-menu-title">스터디 모집</span>
          </IconContent>
          <IconContent to={'/mentoring'}>
            <Icon icon="bi:clipboard2-check-fill" color="var(--greenMain)" width="70%" height="52" />
            <span className="icon-menu-title">멘토링</span>
          </IconContent>
        </div>
      </MainPage>
    </div>
  );
};

export default Main;
