import { InlineIcon } from '@iconify/react';
import * as S from './MyPageLists.style';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface PropsType {
  list: {
    postscriptId?: number;
    postscriptTitle: string;
    postscriptContent: string;
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

const MyPageLists = ({ list }: PropsType) => {
  const createTime = formatDistanceToNow(new Date(list.createdAt), { locale: ko });
  const updateTime = formatDistanceToNow(new Date(list.updatedAt ? list.updatedAt : new Date()), { locale: ko });
  return (
    <S.PostMyPageContent>
      <S.PostLinkMyPage to={`/postscript/${list.postscriptId}`}>
        <S.MyPageListsTitle>{list.postscriptTitle}</S.MyPageListsTitle>
        <S.MyPageListsContent>{list.postscriptContent}</S.MyPageListsContent>
        <S.PostInfoView>
          <S.UserLikeIconList>
            {list.view ? <span>조회{list.view}</span> : null}
            {list.updatedAt ? <div> {updateTime}전</div> : <div> {createTime}전</div>}
            <div>
              <InlineIcon icon="akar-icons:heart" />
              {list.like}
            </div>
          </S.UserLikeIconList>
        </S.PostInfoView>
      </S.PostLinkMyPage>
    </S.PostMyPageContent>
  );
};

export default MyPageLists;
