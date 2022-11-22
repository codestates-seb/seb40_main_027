import PageHeader from '../components/Header/PageHeader';
import * as S from './Test.style';
import StartForm from '../components/TestForm/StartForm';

const Test = () => {
  return (
    <>
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
