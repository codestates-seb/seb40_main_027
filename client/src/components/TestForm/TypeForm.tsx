import { useState } from 'react';

import EndForm from './EndForm';
import { useRecoilState } from 'recoil';
import { yesContent, noContent } from '../../atoms/index';
import testImg1 from '../../assets/image/testImg1.png';
import testImg2 from '../../assets/image/testImg2.png';
import testImg3 from '../../assets/image/testImg3.png';
import testImg4 from '../../assets/image/testImg4.png';
import testImg5 from '../../assets/image/testImg5.png';
import testImg6 from '../../assets/image/testImg6.png';
import testImg7 from '../../assets/image/testImg7.png';
import testImg8 from '../../assets/image/testImg8.png';
import testImg9 from '../../assets/image/testImg9.png';
import * as S from './TypeForm.style';

const TypeForm = () => {
  const [idNumber, setIdNumber] = useState<number>(0);
  const [isYes, setIsYes] = useRecoilState<number>(yesContent);
  const [isNo, setIsNo] = useRecoilState<number>(noContent);

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

  const imgList1 = <img src={testImg6} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList2 = <img src={testImg7} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList3 = <img src={testImg8} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList4 = <img src={testImg3} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList5 = <img src={testImg5} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList6 = <img src={testImg1} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList7 = <img src={testImg9} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList8 = <img src={testImg2} alt="적성검사 이미지" width="100%" height="100%" />;
  const imgList9 = <img src={testImg4} alt="적성검사 이미지" width="100%" height="100%" />;
  const PictureList = [imgList1, imgList2, imgList3, imgList4, imgList5, imgList6, imgList7, imgList8, imgList9];
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
            <S.SContentForm>{QuestionList.filter((el, idx) => idx === idNumber)[0]}</S.SContentForm>
            <div className="img-review">{PictureList.filter((el, idx) => idx === idNumber)[0]}</div>
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
