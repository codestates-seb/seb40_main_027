import { SmallBorderTagButton } from '../Button';
import ForumWrittenInfo from './ForumWrittenInfo';
import * as S from './ForumArticle.style';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface PropsType {
  forumType: string;
  post: any;
}

const ForumArticle = ({ forumType, post }: PropsType) => {
  const content = post[`${forumType}Content`].replace(/<[^>]*>?/g, ' ');
  const createdAt = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: ko });

  return (
    <S.Article>
      <S.StyledLink to={`/${forumType}/${post[`${forumType}Id`]}`}>
        <S.TagsContainer>
          <SmallBorderTagButton text={post.tagName} />
        </S.TagsContainer>

        <S.Title>{post[`${forumType}Title`]}</S.Title>

        <S.Content>{content}</S.Content>

        <ForumWrittenInfo
          position="right"
          author={post.member.nickname}
          createdAt={createdAt}
          view={post.view}
          totalVotes={post.totalVotes}
        />
      </S.StyledLink>
    </S.Article>
  );
};

export default ForumArticle;
