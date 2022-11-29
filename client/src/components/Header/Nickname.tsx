import styled from 'styled-components';
import Logout from '../Button/Logout';
import { Icon } from '@iconify/react';

const ImgCircle = styled.span`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LogoutArea = styled.span`
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const NicknameArea = styled.div`
  margin-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Nickname = () => {
  return (
    <ImgCircle>
      <NicknameArea>
        <Icon icon="carbon:user-avatar-filled-alt" width="30" height="30" />
        <span>Nickname</span>
      </NicknameArea>
      <LogoutArea>
        <Logout />
      </LogoutArea>
    </ImgCircle>
  );
};

export default Nickname;
