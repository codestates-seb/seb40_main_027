import * as S from './ForumDetail.style';
import { BackgroundOtherButton, SmallBorderTagButton, MoreButton } from '../Button';
import { GRAY_LIST_FILL, GREEN_MAIN } from '../../assets/constant/COLOR';
import ForumWrittenInfo from './ForumWrittenInfo';
import { InlineIcon } from '@iconify/react';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { readPost } from '../../utils/api/forumAPI';
import StudyAnswer from '../Answer/StudyAnswer';
import ForumArticlesAnswer from '../Answer/ForumArticlesAnswer';
import MentoringAnswer from '../Answer/MentoringAnswer';

interface PropsType {
  page?: number;
}

const ForumDetail = ({ page = 1 }: PropsType) => {
  const [post, setPost] = useState<any>(undefined);
  const [createdAt, setCreatedAt] = useState<string | undefined>(undefined);

  const { pathname } = useLocation();
  const [, forumType, id] = pathname.split('/');

  const navigate = useNavigate();

  useEffect(() => {
    const url = `/${forumType}/${id}`;
    readPost(url, setPost).then((res) => {
      setCreatedAt(formatDistanceToNow(new Date(res.createdAt), { addSuffix: true, locale: ko }));
    });
  }, []);

  const handleClick = () => {
    navigate(`/${forumType}?page=${page}`);
  };

  return (
    <S.Container>
      <S.ContentHeader>
        <BackgroundOtherButton text="목록" color={GRAY_LIST_FILL} onClick={handleClick} />
      </S.ContentHeader>

      {post && (
        <S.ContentContainer>
          <S.TitleInfoContainer>
            <S.TagsContainer>
              <SmallBorderTagButton text={post.tagName} />
            </S.TagsContainer>
            <S.TitleContainer>
              <S.Title>{post[`${forumType}Title`]}</S.Title>
              <MoreButton
                buttonType="post"
                forumType={forumType}
                id={post[`${forumType}Id`]}
                tagName={post.tagName}
                title={post[`${forumType}Title`]}
                content={post[`${forumType}Content`]}
                author={post.member.nickname}
              />
            </S.TitleContainer>
            <ForumWrittenInfo position="left" author={post.member.nickname} createdAt={createdAt} view={post.view} />
          </S.TitleInfoContainer>

          <S.Content
            className="forum-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post[`${forumType}Content`]),
            }}
          />
          <S.LikeContainer>
            <span>
              <InlineIcon icon="akar-icons:heart" />
              <span>{post.totalVotes}</span>
            </span>
            <span>{post[`${forumType}Comments`].length}개의 댓글</span>
          </S.LikeContainer>

          <S.CommentsContainer>
            {forumType === 'postscript' ? (
              <ForumArticlesAnswer />
            ) : forumType === 'study' ? (
              <StudyAnswer />
            ) : (
              <MentoringAnswer />
            )}
          </S.CommentsContainer>
        </S.ContentContainer>
      )}

      <S.ContentHeader>
        <BackgroundOtherButton text="목록" color={GRAY_LIST_FILL} onClick={handleClick} />
      </S.ContentHeader>
    </S.Container>
  );
};

export default ForumDetail;
