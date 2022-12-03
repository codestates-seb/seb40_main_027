import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import Nickname from './Nickname';
import { RegisterButton, LoginButton } from '../Button/index';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';
import { Link } from 'react-router-dom';

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
    padding-top: 0.5rem;
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

const MainHeader = () => {
  const { isLog } = useRecoilValue(logUser);

  return (
    <HeaderContent>
      <div className="header-component">
        <img src={logo} alt="logo" />
        {isLog ? (
          <div>
            <Nickname />
          </div>
        ) : (
          <div>
            <Link to="/users/login">
              <LoginButton />
            </Link>
            <Link to="/users/signup">
              <RegisterButton />
            </Link>
          </div>
        )}
      </div>
    </HeaderContent>
  );
};

export default MainHeader;
