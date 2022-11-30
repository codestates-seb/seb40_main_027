import { atom } from 'recoil';
import { IanswerList } from '../components/Answer/ForumArticlesAnswer';
import { StudyanswerList } from '../components/Answer/StudyAnswer';
import { MentoringanswerList } from '../components/Answer/MentoringAnswer';

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

export const studyListData = atom<StudyanswerList>({
  key: 'studyListData',
  default: [],
});

export const mentoringListData = atom<MentoringanswerList>({
  key: 'mentoringListData',
  default: [],
});
