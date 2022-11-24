import * as S from './PageNotFound.style';
import mascot from '../assets/image/mascot.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <S.CardLayout>
      <S.Card>
        <S.ImageContainer>
          <S.Image src={mascot} loading="lazy" />
        </S.ImageContainer>
        <S.Content>
          <S.ErrorTitle>404</S.ErrorTitle>
          <S.Title>페이지를 찾을 수 없습니다</S.Title>
          <S.Text>입력한 주소가 잘못되었거나 사용이 일시 중단되어 요청하신 페이지를 찾을 수 없습니다.</S.Text>
          <S.Text>메인 페이지로 이동하는 것을 권장드립니다</S.Text>
          <Link to="/">메인 페이지 바로가기</Link>
        </S.Content>
      </S.Card>
    </S.CardLayout>
  );
};
export default PageNotFound;
