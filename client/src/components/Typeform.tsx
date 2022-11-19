import { useState } from 'react';
import styled from 'styled-components';
import EndForm from './EndForm';
import { useRecoilState } from 'recoil';
import { YesContent, NoContent } from '../atoms/index';
import Pra1 from '../assets/image/pra1.png';

const FormStyled = styled.div`
  height: 100%;
  width: 60%;
  display: inline;
  align-items: center;
  transition: all 2s;

  @media screen and (max-width: 414px) {
    margin: 0;
    width: 80vw;
  }
`;

const QuestionContentForm = styled.div`
  height: 60%;
  font-size: 1.2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;

  margin: 2rem;

  .img-review {
    display: flex;
    justify-content: center;
    margin: 2rem;
    height: 100%;
  }

  @media screen and (max-width: 414px) {
    margin: 0px;
    .img-review {
      display: flex;
      margin: 0px;
      width: 80vw;
      margin-top: 1rem;
    }
  }
`;

const SelectQuestionButton = styled.button`
  background-color: var(--greenMain);
  width: 100%;
  height: 10%;
  padding: 0% 10% 0% 10%;
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-start;
  margin: 1rem 0 1rem 0;
  border: 3px double white;
  &:hover {
    background-color: var(--whiteBackground);
    transition: all 1s;
  }
`;

const NumberBorder = styled.span`
  border: 3px double white;
  display: flex;
  width: 7%;
  color: white;
`;

const MyComponent = () => {
  const [idNumber, setIdNumber] = useState<number>(0);
  const [isYes, setIsYes] = useRecoilState<number>(YesContent);
  const [isNo, setIsNo] = useRecoilState<number>(NoContent);

  const QuestionList = [
    ' 나는 홈페이지 또는 어플을 보면 아이콘 배치 또는 흐름에 대해서 불편한 점을 느낀 적이 많고, 고치고 싶어한 적이 있다',
    ' 기능이 먼저다. vs 아니다. 디자인이 먼저다',
    'PPT는 흰색 배경에 검은색 글자로 작성하는 것이 역시 최고다(외관보다는 내용이 중요)',
    '나는 변화 또는 트렌드를 따라가는 것이 좋다',
    '나는 데이터의 로직에 관심이 많다',
    '나는 미술보다 수학을 좋아한다.',
    '나는 어릴 때 기계 내부가 어떻게 생겼는 지 궁금하여 해부하거나 상상한 적이 있다',
    '나는 다양한 사람들과 소통하는 것을 좋아한다.',
    '문제를 생각할 때 혼자 생각해서 도출하는 것을 선호한다',
  ];
  let aaa = <img src={Pra1} alt="적성검사 이미지" width="100%" height="80%" />; //이미지의 이름은 나중에 정하고 다시 바꿀예정
  const PictureList = [aaa, aaa, aaa, aaa, aaa, aaa, aaa, aaa, aaa];
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
      {idNumber > 8 ? (
        <EndForm />
      ) : (
        <div>
          <QuestionContentForm>
            <NumberBorder>{idNumber + 1}.</NumberBorder>
            {QuestionList.filter((el, idx) => idx === idNumber)}
            <div className="img-review">{PictureList.filter((el, idx) => idx === idNumber)}</div>
          </QuestionContentForm>

          <SelectQuestionButton onClick={ViewYesHandelr}>1. Yes</SelectQuestionButton>
          <SelectQuestionButton onClick={ViewNoHandelr}>2. No</SelectQuestionButton>
        </div>
      )}
    </FormStyled>
  );
};

export default MyComponent;
