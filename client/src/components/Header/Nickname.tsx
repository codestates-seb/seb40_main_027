import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userName } from '../../atoms';
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
  const nickname = useRecoilValue(userName);
  return (
    <ImgCircle>
      <span className="user-img">사</span>
      <span>{nickname}</span>
    </ImgCircle>
  );
};

export default Nickname;
