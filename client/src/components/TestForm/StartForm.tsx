import * as S from './StartForm.style';
import WarningWindow from './WarningWindow';
import { useRecoilState } from 'recoil';
import { isStart } from '../../atoms/index';

const StartForm = () => {
  const [isStarting, setIsStarting] = useRecoilState(isStart);
  const StartHandler = () => {
    setIsStarting(!isStarting);
  };
  return (
    <S.StartFormView>
      {isStarting ? (
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
