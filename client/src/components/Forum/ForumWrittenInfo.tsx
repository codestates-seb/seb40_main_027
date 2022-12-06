import { InlineIcon } from '@iconify/react';
import * as S from './ForumWrittenInfo.style';

interface PropsType {
  position: 'left' | 'right';
  author: string;
  createdAt?: string;
  modifiedAt?: string;
  view?: number;
  totalVotes?: number;
}

const ForumWrittenInfo = ({ position, author, createdAt, modifiedAt, view, totalVotes }: PropsType) => {
  return (
    <S.Container position={position}>
      <InlineIcon icon="bx:user-circle" />
      <span>{author}</span>
      {createdAt !== undefined ? <span>{modifiedAt ? modifiedAt : createdAt}</span> : null}
      {view !== undefined ? <span>조회 {view}</span> : null}
      {totalVotes !== undefined ? (
        <>
          <InlineIcon icon="akar-icons:heart" />
          <span>{totalVotes}</span>
        </>
      ) : null}
    </S.Container>
  );
};

export default ForumWrittenInfo;
