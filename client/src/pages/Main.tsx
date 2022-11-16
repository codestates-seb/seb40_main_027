import MainHeader from '../components/Header/MainHeader';
import mainbanner from '../assets/image/mainbanner.png';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import mainmobile from '../assets/image/mainmobile.png';

const MainPage = styled.div`
  height: 90vh;
  #main-big-banner {
    width: 100%;
    height: 55%;
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
      height: 30%;
      width: 100%;
      display: flex;
    }
  }
`;

const IconContent = styled.span`
  background-color: var(--grayListFill);
  height: 7rem;
  width: 11%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 0px 1% 0px 1%;

  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
    height: 50%;
    margin: 5%;
  }
`;

const Main = () => {
  return (
    <div>
      <MainHeader />
      <MainPage>
        <img id="main-big-banner" src={mainbanner} alt="mainbanner" />
        <img id="main-small-banner" src={mainmobile} alt="mainmobilebanner" />
        <div className="icon-box">
          <IconContent>
            <Icon icon="fluent:person-question-mark-16-regular" color="#1dca89" width="90" height="72" />
            적성검사
          </IconContent>
          <IconContent>
            <Icon icon="zondicons:load-balancer" color="#1dca89" width="90" height="72" />
            적성검사
          </IconContent>
          <IconContent>
            <Icon icon="gridicons:scheduled" color="#1dca89" width="90" height="72" />
            학원일정
          </IconContent>
          <IconContent>
            <Icon icon="emojione-monotone:left-speech-bubble" color="#1dca89" width="90" height="72" />
            수료후기
          </IconContent>
          <IconContent>
            <Icon icon="eos-icons:machine-learning" color="#1dca89" width="90" height="72" />
            스터디 모집
          </IconContent>
          <IconContent>
            <Icon icon="bi:clipboard2-check-fill" color="#1dca89" width="105" height="72" />
            멘토링
          </IconContent>
        </div>
      </MainPage>
    </div>
  );
};

export default Main;
