import { useRecoilState } from 'recoil';
import { yesContent, noContent, isStart } from '../../atoms/index';
import * as S from './EndForm.style';
import { Icon } from '@iconify/react';
import flower1 from '../../assets/image/flower1.png';

const EndForm = () => {
  const [isYes, setIsYes] = useRecoilState<number>(yesContent);
  const [isNo, setIsNo] = useRecoilState<number>(noContent);
  const [isStarting, setIsStarting] = useRecoilState(isStart);

  const returnHandler = () => {
    setIsStarting(!isStarting);
    setIsYes(0);
    setIsNo(0);
  };

  return (
    <S.ResultEndFormContent>
      <div className="font-result-title">결과는?</div>
      {isYes > isNo ? (
        <div className="font-result-view">
          <div className="font-real">
            당신은 매력쟁이 프론트 엔드 입니다!
            <br /> 프론트엔드 개발자는 여러분이 지금 보고 있는 웹사이트, ‘웹’을 개발하는 웹 개발 영역 중 사용자가 눈으로
            보는 영역을 구축하고, 기능을 구현하는 개발자입니다. 프론트엔드에 대해 더 자세히 알고 싶다면?
          </div>

          <S.FrontPicture>
            <img src={flower1} alt="결과" width="100%" />
          </S.FrontPicture>
          <S.ResultBottomFrom>
            <a href={'https://roadmap.sh/frontend'} target="_blank" rel="noreferrer">
              추천링크
            </a>
          </S.ResultBottomFrom>
        </div>
      ) : (
        <div className="font-result-view">
          <div className="font-real">
            당신은 지적인 백엔드 입니다!
            <br />
            백엔드 개발자는 웹 사이트, 소프트웨어 또는 정보 시스템의 논리적 백엔드 및 핵심 계산 논리를 만드는 프로그래머
            유형입니다. 백엔드에 대해 더 자세히 알고 싶다면?
          </div>
          <S.FrontPicture>
            <img src={flower1} alt="결과" width="100%" />
          </S.FrontPicture>
          <S.ResultBottomFrom>
            <a href={'https://roadmap.sh/backend'} target="_blank" rel="noreferrer">
              추천링크
            </a>
          </S.ResultBottomFrom>
        </div>
      )}
      <div className="return-content">
        <S.ReturnButton onClick={returnHandler}>
          <Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="30" height="30" />
        </S.ReturnButton>
      </div>
    </S.ResultEndFormContent>
  );
};
export default EndForm;
