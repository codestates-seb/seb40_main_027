import { InlineIcon } from '@iconify/react';
import * as S from './MyPageLists.style';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

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
  const createTime = formatDistanceToNow(new Date(createdAt), { locale: ko });
  const updateTime = formatDistanceToNow(new Date(updatedAt ? updatedAt : new Date()), { locale: ko });
  return (
    <S.PostMyPageContent>
      <S.PostLinkMyPage
        to={postscriptId ? `/postscript/${postscriptId}` : studyId ? `/study/${studyId}` : `/mentoring/${mentoringId}`}
      >
        <S.MyPageListsTitle>{studyTitle || mentoringTitle || postscriptTitle}</S.MyPageListsTitle>
        <S.MyPageListsContent>{studyContent || mentoringContent || postscriptContent}</S.MyPageListsContent>
        <S.PostInfoView>
          <S.UserLikeIconList>
            {view ? <span>조회{view}</span> : null}
            {updatedAt ? <div> {updateTime}전</div> : <div> {createTime}전</div>}
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
