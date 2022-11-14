import styled from 'styled-components';

const Imgcircle = styled.span`
  height: 4rem;

  .userimg {
    width: 2rem;
    height: 2rem;
    border: 1px solid red;
    border-radius: 50%;
  }
`;
const Nickname = () => {
  return (
    <Imgcircle>
      <span className="userimg">사</span>
      <span>Nickname</span>
    </Imgcircle>
  );
};

export default Nickname;
