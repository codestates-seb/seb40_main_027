import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InlineIcon } from '@iconify/react';
import { calculateTime } from '../Calculate';

const PostLinkMyPage = styled(Link)`
  text-decoration: none;
  padding: calc(20 / 16 * 1rem) calc(20 / 16 * 1rem) 10 calc(20 / 16 * 1rem);
`;

const PostMyPageContent = styled.div`
  height: 12%;
  padding: calc(20 / 16 * 1rem);
  width: 50vw;
  border-bottom: 1px solid var(--grayContentsBorder);
  @media screen and (max-width: 414px) {
    width: 100%;
  }

  & > * > *:not(:last-child) {
    margin-bottom: calc(10 / 16 * 1rem);
  }
`;

const MyPageListsTitle = styled.div`
  font-weight: 700;
  font-size: calc(18 / 16 * 1rem);
  text-decoration: none;
`;

const MyPageListsContent = styled.div`
  font-size: calc(14 / 16 * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostInfoView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1rem;
`;
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
    <PostMyPageContent>
      <PostLinkMyPage to={`/postscript/${list.postscriptId}`}>
        <MyPageListsTitle>{list.postscriptTitle}</MyPageListsTitle>
        <MyPageListsContent>{list.postscriptContent}</MyPageListsContent>
        <PostInfoView>
          {list.view ? <span>조회{list.view}</span> : null}
          {list.updatedAt ? (
            <div>{calculateTime(new Date(list.updatedAt)).toLocaleString()}</div>
          ) : (
            <div>{calculateTime(new Date(list.createdAt)).toLocaleString()}</div>
          )}

          <InlineIcon icon="akar-icons:heart" />
          <div>{list.like}</div>
        </PostInfoView>
      </PostLinkMyPage>
    </PostMyPageContent>
  );
};

export default MyPageLists;
