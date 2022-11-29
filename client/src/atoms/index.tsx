import { atom } from 'recoil';

export interface answerListProps {
  createdAt?: string;
  postCommentId: number;
  postscriptComment: string;
  updatedAt?: string;
}

interface IanswerList extends Array<answerListProps> {}

export const sideBarFloading = atom({
  key: 'sideBarFloading',
  default: false,
});

export const yesContent = atom({
  key: 'yesContent',
  default: 0,
});

export const noContent = atom({
  key: 'noContent',
  default: 0,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
});

export const answerListData = atom<IanswerList>({
  key: 'answerListData',
  default: [],
});
