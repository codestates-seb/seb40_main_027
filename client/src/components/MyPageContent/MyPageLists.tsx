import { InlineIcon } from '@iconify/react';
import * as S from './MyPageLists.style';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms/index';
import { Icon } from '@iconify/react';

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
  const updateTime = formatDistanceToNow(new Date(updatedAt ? updatedAt : new Date()), { addSuffix: true, locale: ko });

  console.log(setLogStatus.nickname);
  return (
    <S.PostMyPageContent>
      <S.PostLinkMyPage
        to={postscriptId ? `/postscript/${postscriptId}` : studyId ? `/study/${studyId}` : `/mentoring/${mentoringId}`}
      >
        <S.MyPageListsTitle>{studyTitle || mentoringTitle || postscriptTitle}</S.MyPageListsTitle>
        <S.MyPageListsContent>{studyContent || mentoringContent || postscriptContent}</S.MyPageListsContent>
        <S.PostInfoView>
          <S.UserLikeIconList>
            <span>
              <Icon icon="carbon:user-avatar-filled-alt" width="25" height="12" />
            </span>
            {setLogStatus.nickname}
            {view ? <span>조회{view}</span> : null}
            {updatedAt === createdAt ? <div> {createTime}</div> : <div> {updateTime}</div>}
            <div>
              <InlineIcon icon="akar-icons:heart" />a
            </div>
          </S.UserLikeIconList>
        </S.PostInfoView>
      </S.PostLinkMyPage>
    </S.PostMyPageContent>
  );
};

export default MyPageLists;
