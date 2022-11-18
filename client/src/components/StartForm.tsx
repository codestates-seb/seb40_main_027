import { useState } from 'react';
import TypeForm from './Typeform';
import styled from 'styled-components';

const StartFormView = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartView = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-evenly;
  align-items: center;
  color: var(--whiteBackground);
  font-size: 1.5rem;
`;

const StartFormButton = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 10px;

  background-color: aquamarine;
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
