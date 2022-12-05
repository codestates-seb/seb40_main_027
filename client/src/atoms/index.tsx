import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
import { IAnswerList } from '../components/Answer/ForumArticlesAnswer';
import { StudyAnswerList } from '../components/Answer/StudyAnswer';
import { MentoringAnswerList } from '../components/Answer/MentoringAnswer';
import { BootDataList } from '../components/MyPageContent/MyPageTable';
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

export const isStart = atom({
  key: 'isStart',
  default: false,
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

export const answerListData = atom<IAnswerList>({
  key: 'answerListData',
  default: [],
});

export const studyListData = atom<StudyAnswerList>({
  key: 'studyListData',
  default: [],
});

export const mentoringListData = atom<MentoringAnswerList>({
  key: 'mentoringListData',
  default: [],
});

export const bootListMyPage = atom<BootDataList>({
  key: 'bootListMyPage',
  default: [],
});

export const upDateMyPage = atom({
  key: 'upDateMyPage',
  default: {
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});
