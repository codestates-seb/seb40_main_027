import { useRecoilState } from 'recoil';
import { YesContent, NoContent } from '../atoms/index';
import styled from 'styled-components';
import flower1 from '../assets/image/flower1.png';

const EndForm = () => {
  const [isYes, setIsYes] = useRecoilState<number>(YesContent);
  const [isNo, setIsNo] = useRecoilState<number>(NoContent);

  const ResultEndFormContent = styled.div`
    .font-Result-title {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      color: var(--whiteBackground);
      margin: 1rem;
    }

    .font-result-view {
      margin: 1rem;
      font-weight: 100;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
    }
  `;

  const FrontPicture = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    display: inline;

    @media screen and (max-width: 414px) {
      display: none;
    }
  `;

  const ResultBottomFrom = styled.div`
    display: flex;
    background-color: aquamarine;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    font-size: large;
    font-weight: 500;
  `;
  return (
    <ResultEndFormContent>
      <div className="font-Result-title">결과는?</div>
      {isYes > isNo ? (
        <div className="font-result-view">
          당신은 매력쟁이 프론트 엔드 입니다!<br></br> 프론트엔드 개발자는 여러분이 지금 보고 있는 웹사이트, ‘웹’을
          개발하는 웹 개발 영역 중 사용자가 눈으로 보는 영역을 구축하고, 기능을 구현하는 개발자입니다. 프론트엔드에 대해
          더 자세히 알고 싶다면?
          <FrontPicture>
            <img src={flower1} alt="결과" width="100%" />
          </FrontPicture>
          <ResultBottomFrom>추천링크</ResultBottomFrom>
        </div>
      ) : (
        <div className="font-result-view">
          당신은 지적인 백엔드 입니다!
          <br />
          백엔드 개발자는 웹 사이트, 소프트웨어 또는 정보 시스템의 논리적 백엔드 및 핵심 계산 논리를 만드는 프로그래머
          유형입니다. 백엔드에 대해 더 자세히 알고 싶다면?
          <FrontPicture>
            <img src={flower1} alt="결과" width="100%" />
          </FrontPicture>
          <ResultBottomFrom>추천링크</ResultBottomFrom>
        </div>
      )}
    </ResultEndFormContent>
  );
};
export default EndForm;
