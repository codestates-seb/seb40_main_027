import styled from 'styled-components';
import Logout from '../Logout';

const ImgCircle = styled.span`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .user-img {
    width: 2rem;
    height: 2rem;
    border: 1px solid red;
    border-radius: 50%;
  }
`;

const LogoutArea = styled.span`
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const NickNameArea = styled.div`
  margin-right: 1rem;
`;
const Nickname = () => {
  return (
    <ImgCircle>
      <NickNameArea>
        <span className="user-img">사</span>
        <span>Nickname</span>
      </NickNameArea>
      <LogoutArea>
        <Logout />
      </LogoutArea>
    </ImgCircle>
  );
};

export default Nickname;
