import { useState } from 'react';
import * as S from './StartForm.style';
import WarningWindow from './WarningWindow';

const StartForm = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const StartHandler = () => {
    setIsStart(!isStart);
  };
  return (
    <S.StartFormView>
      {isStart ? (
        <WarningWindow />
      ) : (
        <S.StartView>
          <div>환영합니다 여러분! 그럼 테스트를 시작 해 볼까요?</div>
          <S.StartFormButton onClick={StartHandler}>start</S.StartFormButton>
        </S.StartView>
      )}
    </S.StartFormView>
  );
};

export default StartForm;
