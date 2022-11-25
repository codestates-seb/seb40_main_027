import * as S from './ForumDetail.style';
import { BackgroundOtherButton, SmallBorderTagButton, MoreButton } from '../Button';
import { GRAY_LIST_FILL, GREEN_MAIN } from '../../assets/constant/COLOR';
import ForumWrittenInfo from './ForumWrittenInfo';
import { InlineIcon } from '@iconify/react';
import ForumArticlesAnswer from '../Answer/ForumArticlesAnswer';

const ForumDetail = () => {
  /** 더미 데이터 */
  const post = {
    postscriptId: 0,
    postscriptTitle: '코드스테이츠 프론트엔드 후기',
    postscriptContent:
      '<p>안녕하세요. 코드스테이츠 프론트엔드 부트캠프 후기입니다. 저는 수료 후 네카라쿠배 중 1곳에 취업했습니다.</p><h3>부트캠프 활용 꿀팁</h3><p>동기들과의 스터디에 적극 참여하세요.<br>매일 알고리즘 문제 1개 이상 풀기</p>',
    postscriptTags: ['부트캠프 후기', '개발 공부법'],
    view: 32,
    like: 2,
    user: {
      userId: 0,
      name: '홍길동',
      userEmail: 'hong@gmail.com',
    },
    createdAt: '22.11.09 15:00',
    updatedAt: '22.11.09 15:03',
    comment: [
      {
        postscriptCommentId: 0,
        postscriptComment: '부캠 후기 게시판 첫 번째 댓글',
        user: {
          user_Id: 1,
          nickname: '홍길동',
          email: 'hong@gmail.com',
        },
        createdAt: '22.11.09 15:10',
        updatedAt: '22.11.09 15:11',
      },
      {
        postscriptCommentId: 1,
        postscriptComment: '부캠 후기 게시판 두 번째 댓글',
        user: {
          user_Id: 2,
          nickname: '김코딩',
          email: 'kim@gmail.com',
        },
        createdAt: '22.11.09 15:30',
        updatedAt: '22.11.09 15:33',
      },
    ],
  };

  return (
    <S.Container>
      <S.ContentHeader>
        <BackgroundOtherButton text="목록" color={GRAY_LIST_FILL} />
      </S.ContentHeader>

      <S.ContentContainer>
        <S.TitleInfoContainer>
          <S.TagsContainer>
            {post.postscriptTags.map((tag, index) => (
              <SmallBorderTagButton key={index} text={tag} />
            ))}
          </S.TagsContainer>
          <S.TitleContainer>
            <S.Title>{post.postscriptTitle}</S.Title>
            <MoreButton />
          </S.TitleContainer>
          <ForumWrittenInfo
            position="left"
            author={post.user.name}
            createdAt={post.createdAt}
            view={post.view}
            like={post.like}
          />
        </S.TitleInfoContainer>

        <S.Content>{post.postscriptContent}</S.Content>

        <S.LikeContainer>
          <span>
            <InlineIcon icon="akar-icons:heart" />
            <span>{post.like}</span>
          </span>
          <span>{post.comment.length}개의 댓글</span>
        </S.LikeContainer>

        <S.CommentsContainer>
          {/* {post.comment.map((comment) => (
            <S.CommentContainer key={comment.postscriptCommentId}>
              <S.CommentInfoContainer>
                <ForumWrittenInfo position="left" author={comment.user.nickname} createdAt={comment.createdAt} />
                <MoreButton />
              </S.CommentInfoContainer>
              <div>{comment.postscriptComment}</div>
            </S.CommentContainer>
          ))} */}

          {/* <S.NewCommentContainer>
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
          </S.NewCommentContainer> */}
          <ForumArticlesAnswer />
        </S.CommentsContainer>
      </S.ContentContainer>

      <S.ContentHeader>
        <BackgroundOtherButton text="목록" color={GRAY_LIST_FILL} />
      </S.ContentHeader>
    </S.Container>
  );
};

export default ForumDetail;
