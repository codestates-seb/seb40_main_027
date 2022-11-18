import { useState } from 'react';
import styled from 'styled-components';
import EndForm from './EndForm';
import { useRecoilState } from 'recoil';
import { YesContent, NoContent } from '../atoms/index';
const FormStyled = styled.div`
  height: 80%;
  width: 60%;
  background-color: var(--greenMain);
  border: 1px solid var(--whiteBackground);
  display: flex;
  justify-content: space-around;
`;

const QuestionContent = styled.div`
  height: 40%;
  background-color: var(--whiteBackground);
  padding: 1.5rem;
  border-radius: 10px;
  width: 400px;
  margin-top: 1rem;
`;

const SelectQuestionButton = styled.button`
  border: 1px solid var(--whiteBackground);
  background-color: var(--greenMain);
  width: 100%;
  height: 10%;
  padding: 0% 10% 0% 10%;
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-start;
  margin-top: 10%;
`;
const MyComponent = () => {
  const [idNumber, setIdNumber] = useState<number>(0);
  const [isYes, setIsYes] = useRecoilState<number>(YesContent);
  const [isNo, setIsNo] = useRecoilState<number>(NoContent);

  const QuestionList = [
    '1.   나는 홈페이지 또는 어플을 보면 아이콘 배치 또는 흐름에 대해서 불편한 점을 느낀 적이 많고, 고치고 싶어한 적이 있다',
    '기능이 먼저다. 아니다. 디자인이 먼저다',
    'PPT는 흰색 배경에 검은색 글자로 작성하는 것이 역시 최고다(외관보다는 내용이 중요)',
    '나는 변화 또는 트렌드를 따라가는 것이 좋다',
    '나는 데이터의 로직에 관심이 많다',
    '질문6',
    '질문7',
  ];

  const ViewYesHandelr = () => {
    setIdNumber(idNumber + 1);
    setIsYes(isYes + 1);
  };

  const ViewNoHandelr = () => {
    setIdNumber(idNumber + 1);
    setIsNo(isNo + 1);
  };
  return (
    <FormStyled>
      {idNumber > 6 ? (
        <EndForm />
      ) : (
        <div>
          <QuestionContent> {QuestionList.filter((el, idx) => idx === idNumber)}</QuestionContent>

          <SelectQuestionButton onClick={ViewYesHandelr}>1. yes</SelectQuestionButton>
          <SelectQuestionButton onClick={ViewNoHandelr}>2. no</SelectQuestionButton>
        </div>
      )}
    </FormStyled>
  );
};

export default MyComponent;
