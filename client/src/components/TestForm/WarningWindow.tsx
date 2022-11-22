import { useState } from 'react';
import TypeForm from './TypeForm';
import * as S from './WarningWindow.style';

const WarningWindow = () => {
  const [isWarning, setIsWarning] = useState<boolean>(false);

  const WaringHandler = () => {
    setIsWarning(!isWarning);
  };
  return (
    <S.WarningLargeContent>
      {isWarning ? (
        <TypeForm />
      ) : (
        <div>
          <S.WarnTitle>주의!</S.WarnTitle>
          <S.WarnContent>이 테스트는 정확한 테스트가 아니므로 주의해주십시오.</S.WarnContent>
          <S.WaringButtonContent>
            <S.WarningButton onClick={WaringHandler}>Next</S.WarningButton>
          </S.WaringButtonContent>
        </div>
      )}
    </S.WarningLargeContent>
  );
};
export default WarningWindow;
