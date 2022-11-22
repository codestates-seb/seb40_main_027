import { useLocation } from 'react-router-dom';
import { GREEN_MAIN, RED_BUTTON_DELETE } from '../../assets/constant/COLOR';
import { TAGS } from '../../assets/constant/TAG';
import { BackgroundOtherButton, BorderOtherButton, SmallBorderTagButton } from '../Button';
import * as S from './ForumWrite.style';

const ForumWrite = () => {
  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  return (
    <S.Container>
      <S.ContentHeader>
        <BorderOtherButton text="삭제" color={RED_BUTTON_DELETE} />
        <BackgroundOtherButton text="등록" color={GREEN_MAIN} />
      </S.ContentHeader>

      <S.TitleInput placeholder="제목을 작성해 주세요" />

      <S.InfoContainer>
        <S.TagsContainer>
          {forumType === 'postscript'
            ? TAGS.map((tag, index) => <SmallBorderTagButton key={index} text={tag.text} />)
            : null}
          {forumType === 'study'
            ? ['모집 중', '모집 완료'].map((tag, index) => <SmallBorderTagButton key={index} text={tag} />)
            : null}
          {forumType === 'mentoring'
            ? ['모집 중', '모집 완료'].map((tag, index) => <SmallBorderTagButton key={index} text={tag} />)
            : null}
        </S.TagsContainer>
        <span>0 / 5,000</span>
      </S.InfoContainer>

      <S.ContentTextarea placeholder="본문을 작성해 주세요" />

      <S.ContentFooter>
        <BorderOtherButton text="삭제" color={RED_BUTTON_DELETE} />
        <BackgroundOtherButton text="등록" color={GREEN_MAIN} />
      </S.ContentFooter>
    </S.Container>
  );
};

export default ForumWrite;
