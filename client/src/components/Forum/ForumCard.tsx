import { InlineIcon } from '@iconify/react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { SmallBackgroundTagButton } from '../Button';
import * as S from './ForumCard.style';
import ForumWrittenInfo from './ForumWrittenInfo';

interface PropsType {
  forumType: string;
  post: any;
}

const ForumCard = ({ forumType, post }: PropsType) => {
  const content = post[`${forumType}Content`].replace(/<[^>]*>?/g, ' ');
  const createdAt = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: ko });

  return (
    <S.Article>
      <S.StyledLink to={`/${forumType}/${post[`${forumType}Id`]}`}>
        <S.TagsContainer>
          <SmallBackgroundTagButton text={post.tagName} />
        </S.TagsContainer>

        <S.Title>{post[`${forumType}Title`]}</S.Title>

        <S.WrittenInfoContainer className="desktop">
          <ForumWrittenInfo position="left" author={post.member.nickname} createdAt={createdAt} view={post.view} />
          <S.LikeContainer>
            <InlineIcon icon="akar-icons:heart" />
            <span>{post.totalVotes}</span>
          </S.LikeContainer>
        </S.WrittenInfoContainer>
        <S.WrittenInfoContainer className="mobile">
          <ForumWrittenInfo
            position="right"
            author={post.member.nickname}
            createdAt={createdAt}
            view={post.view}
            totalVotes={post.totalVotes}
          />
        </S.WrittenInfoContainer>

        <S.Content>{content}</S.Content>
      </S.StyledLink>
    </S.Article>
  );
};

export default ForumCard;
