import styled from 'styled-components';

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
  return (
    <ImgCircle>
      <span className="user-img">사</span>
      <span>Nickname</span>
    </ImgCircle>
  );
};

export default Nickname;
