import { useState } from 'react';

import EndForm from './EndForm';
import { useRecoilState } from 'recoil';
import { YesContent, NoContent } from '../../atoms/index';
//이미지 바꿀것이라 연습용사진입니다.
import Pra1 from '../../assets/image/pra1.png';
import * as S from './TypeForm.style';

const TypeForm = () => {
  const [idNumber, setIdNumber] = useState<number>(0);
  const [isYes, setIsYes] = useRecoilState<number>(YesContent);
  const [isNo, setIsNo] = useRecoilState<number>(NoContent);

  const QuestionList = [
    '나는 홈페이지 또는 어플을 보면 아이콘 배치 또는 흐름에 대해서 불편한 점을 느낀 적이 많고, 고치고 싶어한 적이 있다',
    '기능이 먼저다. vs 아니다. 디자인이 먼저다',
    'PPT는 흰색 배경에 검은색 글자로 작성하는 것이 역시 최고다(외관보다는 내용이 중요)',
    '나는 변화 또는 트렌드를 따라가는 것이 좋다',
    '나는 데이터의 로직에 관심이 많다',
    '나는 미술보다 수학을 좋아한다.',
    '나는 어릴 때 기계 내부가 어떻게 생겼는 지 궁금하여 해부하거나 상상한 적이 있다',
    '나는 다양한 사람들과 소통하는 것을 좋아한다.',
    '문제를 생각할 때 혼자 생각해서 도출하는 것을 선호한다',
  ];
  let aaa = <img src={Pra1} alt="적성검사 이미지" width="100%" height="100%" />; //이미지의 이름은 나중에 정하고 다시 바꿀예정
  const PictureList = [aaa, aaa, aaa, aaa, aaa, aaa, aaa, aaa, aaa];
  const ViewYesHandler = () => {
    setIdNumber(idNumber + 1);
    setIsYes(isYes + 1);
  };

  const ViewNoHandler = () => {
    setIdNumber(idNumber + 1);
    setIsNo(isNo + 1);
  };
  return (
    <S.FormStyled>
      {idNumber > 8 ? (
        <EndForm />
      ) : (
        <S.FormCaseView>
          <S.QuestionContentForm>
            <S.NumberBorder>{idNumber + 1}.</S.NumberBorder>
            <S.SContentForm>{QuestionList.filter((el, idx) => idx === idNumber)}</S.SContentForm>
            <div className="img-review">{PictureList.filter((el, idx) => idx === idNumber)}</div>
          </S.QuestionContentForm>
          <S.ButtonBoxForm>
            <S.SelectQuestionButton onClick={ViewYesHandler}>1. Yes</S.SelectQuestionButton>
            <S.SelectQuestionButton onClick={ViewNoHandler}>2. No</S.SelectQuestionButton>
          </S.ButtonBoxForm>
        </S.FormCaseView>
      )}
    </S.FormStyled>
  );
};

export default TypeForm;
