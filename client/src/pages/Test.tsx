import * as S from './Test.style';
import StartForm from '../components/TestForm/StartForm';

import PageHeaderSide from '../components/Header/PageHeaderSide';
const Test = () => {
  return (
    <>
      <PageHeaderSide />

      <S.TestContent>
        <S.FormContent>
          <S.StyleFormCode>
            <StartForm />
          </S.StyleFormCode>
        </S.FormContent>
      </S.TestContent>
    </>
  );
};
export default Test;
