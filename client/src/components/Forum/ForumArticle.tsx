import { SmallBorderTagButton } from '../Button';
import ForumWrittenInfo from './ForumWrittenInfo';
import * as S from './ForumArticle.style';
import { useLocation } from 'react-router-dom';

interface PropsType {
  post: {
    postscriptId: number;
    postscriptTitle: string;
    postscriptContent: string;
    postscriptTags: string[];
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

const ForumArticle = ({ post }: PropsType) => {
  const { pathname } = useLocation();
  const forumType = pathname.split('/')[1];

  return (
    <S.Article>
      <S.StyledLink to={`/${forumType}/${post.postscriptId}`}>
        <S.TagsContainer>
          {post.postscriptTags.map((tag, index) => (
            <SmallBorderTagButton key={index} text={tag} />
          ))}
        </S.TagsContainer>
        <S.Title>{post.postscriptTitle}</S.Title>
        <S.Content>{post.postscriptContent}</S.Content>
        <ForumWrittenInfo
          position="right"
          author={post.user.name}
          createdAt={post.createdAt}
          view={post.view}
          like={post.like}
        />
      </S.StyledLink>
    </S.Article>
  );
};

export default ForumArticle;
