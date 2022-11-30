import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
