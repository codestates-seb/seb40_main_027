import { useState } from 'react';
import TypeForm from './Typeform';
import styled from 'styled-components';

const StartFormView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 414px) {
    margin: 0 1rem 0 1rem;
  }
`;

const StartView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: var(--whiteBackground);
  font-size: 1.5rem;
`;

const StartFormButton = styled.button`
  border: none;
  margin-top: 2rem;
  width: 7rem;
  height: 3rem;
  border-radius: 10px;

  background-color: aquamarine; //확정적인 색이 아니라 우선 임의로 사용
  &:hover {
    background-color: #a9dbbd; //마이페이지에 컬러지정해서 이곳에서는 우선 사용
    color: var(--whiteBackground);
    transition: all 1s;
  }
`;

const StartForm = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const StartHandler = () => {
    setIsStart(!isStart);
  };
  return (
    <StartFormView>
      {isStart ? (
        <TypeForm />
      ) : (
        <StartView>
          <div>환영합니다 여러분! 그럼 테스트를 시작 해 볼까요?</div>
          <StartFormButton onClick={StartHandler}>start</StartFormButton>
        </StartView>
      )}
    </StartFormView>
  );
};

export default StartForm;
