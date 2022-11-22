import { InlineIcon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import { SmallBackgroundTagButton } from '../Button';
import * as S from './ForumCard.style';
import ForumWrittenInfo from './ForumWrittenInfo';

interface PropsType {
  post: {
    studyId: number;
    studyTitle: string;
    studyContent: string;
    studyTags: string[];
    view: number;
    like: number;
    user: {
      userId: number;
      name: string;
      userEmail: string;
    };
    createdAt: string;
    updatedAt?: string;
  };
}

const ForumCard = ({ post }: PropsType) => {
  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  return (
    <S.Article>
      <S.StyledLink to={`/${forumType}/${post.studyId}`}>
        <S.TagsContainer>
          {post.studyTags.map((tag, index) => (
            <SmallBackgroundTagButton key={index} text={tag} />
          ))}
        </S.TagsContainer>

        <S.Title>{post.studyTitle}</S.Title>

        <S.WrittenInfoContainer className="desktop">
          <ForumWrittenInfo position="left" author={post.user.name} createdAt={post.createdAt} view={post.view} />
          <S.LikeContainer>
            <InlineIcon icon="akar-icons:heart" />
            <span>{post.like}</span>
          </S.LikeContainer>
        </S.WrittenInfoContainer>
        <S.WrittenInfoContainer className="mobile">
          <ForumWrittenInfo
            position="right"
            author={post.user.name}
            createdAt={post.createdAt}
            view={post.view}
            like={post.like}
          />
        </S.WrittenInfoContainer>

        <S.Content>{post.studyContent}</S.Content>
      </S.StyledLink>
    </S.Article>
  );
};

export default ForumCard;
