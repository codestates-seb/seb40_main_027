import * as S from './AnswerListView.style';
import { Icon } from '@iconify/react';

interface HandlerProps {
  PatchHanlder: (e: React.MouseEvent<HTMLElement>) => void;
  editHandler: () => void;
}

export const QuillContainer = ({ PatchHanlder, editHandler }: HandlerProps) => {
  return (
    <S.ButtonArea>
      <S.OkButton onClick={PatchHanlder}>완료</S.OkButton>
      <S.OkButton color={'red'} onClick={editHandler}>
        취소
      </S.OkButton>
    </S.ButtonArea>
  );
};

interface AnswerViewProps {
  nick: string;
  updateAt: string;
  createAt: string;
  editHandler: () => void;
  deleteHandler: (e: React.MouseEvent<HTMLElement>) => void;
}
export const AnswerViewContainer = ({ nick, updateAt, createAt, editHandler, deleteHandler }: AnswerViewProps) => {
  return (
    <S.UserAnswerInfo>
      <S.TimeOrName>
        <S.NameZone>
          <Icon icon="carbon:user-avatar-filled-alt" width="20" height="15" />
          {nick}
        </S.NameZone>
        <span>{updateAt ? <span>{createAt}</span> : createAt} </span>
      </S.TimeOrName>

      <div>
        <S.AnswerButton onClick={editHandler}>수정</S.AnswerButton>
        <S.AnswerButton color="red" onClick={deleteHandler}>
          삭제
        </S.AnswerButton>
      </div>
    </S.UserAnswerInfo>
  );
};
