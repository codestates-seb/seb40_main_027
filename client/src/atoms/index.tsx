import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
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

export const logUser = atom({
  key: 'logUser',
  default: {
    isLog: false,
    memberRole: '',
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
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
