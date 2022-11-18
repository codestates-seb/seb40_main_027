import { useRecoilState } from 'recoil';
import { YesContent, NoContent } from '../atoms/index';
import { useNavigate } from 'react-router-dom';
import Result1 from '../assets/image/result1.png';
import styled from 'styled-components';

const EndForm = () => {
  const [isYes, setIsYes] = useRecoilState<number>(YesContent);
  const [isNo, setIsNo] = useRecoilState<number>(NoContent);
  const navigate = useNavigate();

  const FrontPicture = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  return (
    <div>
      <div>축하합니다!</div>
      {isYes > isNo ? (
        <div>
          당신은 매력쟁이 프론트 엔드 입니다!
          <FrontPicture>
            <img src={Result1} alt="결과" />
          </FrontPicture>
          프론트엔드에 대해 더 자세히 알고 싶다면?
          <button>추천링크</button>
        </div>
      ) : (
        <div>
          당신은 지적인 백엔드 입니다! 백엔드에 대해 더 자세히 알고 싶다면?<button>추천링크</button>
        </div>
      )}
    </div>
  );
};
export default EndForm;
