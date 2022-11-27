import { InlineIcon } from '@iconify/react';
import { Calculate } from '../Calculate';
import * as S from './MyPageLists.style';

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
  return (
    <S.PostMyPageContent>
      <S.PostLinkMyPage to={`/postscript/${list.postscriptId}`}>
        <S.MyPageListsTitle>{list.postscriptTitle}</S.MyPageListsTitle>
        <S.MyPageListsContent>{list.postscriptContent}</S.MyPageListsContent>
        <S.PostInfoView>
          {list.view ? <span>조회{list.view}</span> : null}
          {list.updatedAt ? (
            <div>{Calculate(new Date(list.updatedAt)).toLocaleString()}</div>
          ) : (
            <div>{Calculate(new Date(list.createdAt)).toLocaleString()}</div> //이부분은 확정 x
          )}

          <InlineIcon icon="akar-icons:heart" />
          <div>{list.like}</div>
        </S.PostInfoView>
      </S.PostLinkMyPage>
    </S.PostMyPageContent>
  );
};

export default MyPageLists;
