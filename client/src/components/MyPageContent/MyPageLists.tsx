import { InlineIcon, Icon } from '@iconify/react';
import * as S from './MyPageLists.style';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms/index';
import { SmallBorderTagButton } from '../Button';

interface PropsType {
  mentoringId?: number;
  mentoringTitle?: string;
  mentoringContent?: string;
  postscriptId?: number;
  postscriptTitle?: string;
  postscriptContent?: string;
  studyId?: number;
  studyTitle?: string;
  studyContent?: string;
  totalVotes: number;
  createdAt: string;
  updatedAt: string;
  tagName: string;
  view: number;
}

const MyPageLists = ({
  studyId,
  studyTitle,
  studyContent,
  postscriptId,
  postscriptTitle,
  postscriptContent,
  mentoringId,
  mentoringTitle,
  mentoringContent,
  totalVotes,
  createdAt,
  updatedAt,
  tagName,
  view,
}: PropsType) => {
  const setLogStatus = useRecoilValue(logUser);
  const createTime = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: ko });

  return (
    <S.PostMyPageContent>
      <S.PostLinkMyPage
        to={postscriptId ? `/postscript/${postscriptId}` : studyId ? `/study/${studyId}` : `/mentoring/${mentoringId}`}
      >
        <SmallBorderTagButton text={tagName} />
        <S.MyPageListsTitle>{studyTitle || mentoringTitle || postscriptTitle}</S.MyPageListsTitle>
        <S.MyPageListsContent>
          {studyContent?.replace(/<[^>]*>?/g, ' ') ||
            mentoringContent?.replace(/<[^>]*>?/g, ' ') ||
            postscriptContent?.replace(/<[^>]*>?/g, ' ')}
        </S.MyPageListsContent>
        <S.PostInfoView>
          <S.UserLikeIconList>
            <span>
              <Icon icon="carbon:user-avatar-filled-alt" width="25" height="12" />
            </span>
            {setLogStatus.nickname}
            {view ? <span>조회{view}</span> : null}
            <span>{createTime}</span>
            <div>
              <InlineIcon icon="akar-icons:heart" />
              {totalVotes}
            </div>
          </S.UserLikeIconList>
        </S.PostInfoView>
      </S.PostLinkMyPage>
    </S.PostMyPageContent>
  );
};

export default MyPageLists;
