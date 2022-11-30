import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostLinkMyPage = styled(Link)`
  text-decoration: none;
  padding: calc(20 / 16 * 1rem) calc(20 / 16 * 1rem) 10 calc(20 / 16 * 1rem);
`;

export const PostMyPageContent = styled.div`
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

export const MyPageListsTitle = styled.div`
  font-weight: 700;
  font-size: calc(18 / 16 * 1rem);
  text-decoration: none;
`;

export const MyPageListsContent = styled.div`
  font-size: calc(14 / 16 * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostInfoView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const UserLikeIconList = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15%;

  @media screen and (max-width: 414px) {
    width: 35vw;
  }
`;
