import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import * as S from './PageNotFound.style';
import mascot from '../assets/image/mascot.png';

const PageNotFound = () => {
  return (
    <S.CardLayout>
      <S.Card>
        <S.ImageContainer>
          <S.Image src={mascot} loading="lazy" />
        </S.ImageContainer>
        <S.Content>
          <S.ErrorTitle>404</S.ErrorTitle>
          <S.Title>Page not found</S.Title>
          <S.Text>Sorry, we couldn`t find the page you were looking for.</S.Text>
          <S.Text>We suggest that you return to main home page</S.Text>
          <S.HomeLink href="/">Go to Home</S.HomeLink>
        </S.Content>
      </S.Card>
    </S.CardLayout>
  );
  //   <S.Wrap>
  //     <S.Notice>
  //       <div>
  //         <span>Opps...</span>
  //         <div>
  //           <S.Mascot />
  //           <Icon icon="tabler:error-404" />
  //           <S.Mascot />
  //         </div>
  //         <>
  //           <Link to="/">GO HOME</Link>
  //         </>
  //       </div>
  //     </S.Notice>
  //   </S.Wrap>
  // );
};
export default PageNotFound;
