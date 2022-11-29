import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';
const ImgCircle = styled.span`
  height: 4rem;

  .user-img {
    width: 2rem;
    height: 2rem;
    border: 1px solid red;
    border-radius: 50%;
  }
`;
const Nickname = () => {
  const stateNameNRole = useRecoilValue(logUser);
  return (
    <ImgCircle>
      <span className="user-img">사</span>
      <span>{stateNameNRole.nickname}</span>
    </ImgCircle>
  );
};

export default Nickname;
