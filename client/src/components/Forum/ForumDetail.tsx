import * as S from './ForumDetail.style';
import { BackgroundOtherButton, SmallBorderTagButton, MoreButton } from '../Button';
import { GRAY_LIST_FILL, GREEN_MAIN } from '../../assets/constant/COLOR';
import ForumWrittenInfo from './ForumWrittenInfo';
import { InlineIcon } from '@iconify/react';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

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
    const getData = async (url: string) => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoidGVzdDJAZ21haWwuY29tIiwic3ViIjoidGVzdDJAZ21haWwuY29tIiwiaWF0IjoxNjY5Nzg3Mjg5LCJleHAiOjE2Njk4NzM2ODl9.iTqpksEC-YTOqfesAnVqjGZqzMlBN732i-ltyakkTDgYOrwDOBIy_J0WWyBrkOxUwzesHfW7TNK8iGMDysGpaw',
          },
        });

        if (Math.floor(res.status / 100) !== 2) {
          throw new Error(`${res.status}`);
        }

        setPost(res.data.data);
        setCreatedAt(`${formatDistanceToNow(new Date(res.data.data.createdAt), { locale: ko })} 전`);
      } catch (err) {
        console.error(err);
      }
    };

    getData(`/${forumType}/${id}`);
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
            {post[`${forumType}Comments`].map((comment: any) => (
              <S.CommentContainer key={comment.postCommentId}>
                <S.CommentInfoContainer>
                  <ForumWrittenInfo position="left" author={comment.nickname} createdAt={comment.createdAt} />
                  <MoreButton buttonType="comment" forumType={forumType} id={comment[`${forumType}CommentId`]} />
                </S.CommentInfoContainer>
                <div>{comment[`${forumType}Comment`]}</div>
              </S.CommentContainer>
            ))}

            <S.NewCommentContainer>
              <div>
                <ForumWrittenInfo position="left" author="지금 로그인한 사람" />
                <span>0 / 500</span>
              </div>
              <S.Form>
                <label>
                  <textarea placeholder="댓글을 남겨주세요." />
                </label>
                <div>
                  <BackgroundOtherButton text="등록" color={GREEN_MAIN} />
                </div>
              </S.Form>
            </S.NewCommentContainer>
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
