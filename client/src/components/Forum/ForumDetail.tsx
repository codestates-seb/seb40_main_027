import * as S from './ForumDetail.style';
import { BackgroundOtherButton, SmallBorderTagButton, MoreButton } from '../Button';
import { GRAY_LIST_FILL } from '../../assets/constant/COLOR';
import ForumWrittenInfo from './ForumWrittenInfo';
import { InlineIcon } from '@iconify/react';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { readPost, votePost } from '../../utils/api/forumAPI';
import StudyAnswer from '../Answer/StudyAnswer';
import ForumArticlesAnswer from '../Answer/ForumArticlesAnswer';
import MentoringAnswer from '../Answer/MentoringAnswer';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';

interface PropsType {
  page?: number;
}

const ForumDetail = ({ page = 1 }: PropsType) => {
  const [post, setPost] = useState<any>(undefined);
  const [createdAt, setCreatedAt] = useState<string | undefined>(undefined);

  const { pathname } = useLocation();
  const [, forumType, id] = pathname.split('/');

  const navigate = useNavigate();

  const { nickname, memberRole } = useRecoilValue(logUser);

  useEffect(() => {
    const url = `/${forumType}/${id}`;
    readPost(url, setPost).then((res) => {
      setCreatedAt(formatDistanceToNow(new Date(res.createdAt), { addSuffix: true, locale: ko }));
    });
  }, []);

  const handleClick = () => {
    navigate(`/${forumType}?page=${page}`);
  };

  const handleLike = async () => {
    if (post.vote === 0) {
      const voteUrl = `/${forumType}/votes/${id}?vote=1`;
      await votePost(voteUrl);
    }
    if (post.vote === 1) {
      const voteUrl = `/${forumType}/votes/${id}?vote=0`;
      await votePost(voteUrl);
    }

    const readUrl = `/${forumType}/${id}`;
    readPost(readUrl, setPost).then((res) => {
      setCreatedAt(formatDistanceToNow(new Date(res.createdAt), { addSuffix: true, locale: ko }));
    });
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
              {nickname === post.member.nickname || memberRole === 'admin' ? (
                <MoreButton
                  buttonType="post"
                  forumType={forumType}
                  id={post[`${forumType}Id`]}
                  tagName={post.tagName}
                  title={post[`${forumType}Title`]}
                  content={post[`${forumType}Content`]}
                  author={post.member.nickname}
                />
              ) : null}
            </S.TitleContainer>
            <ForumWrittenInfo position="left" author={post.member.nickname} createdAt={createdAt} view={post.view} />
          </S.TitleInfoContainer>

          <S.Content
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post[`${forumType}Content`]),
            }}
          />
          <S.LikeContainer>
            <S.LikeButton onClick={handleLike} like={post.vote}>
              <InlineIcon icon="akar-icons:heart" />
              <span>{post.totalVotes}</span>
            </S.LikeButton>
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
