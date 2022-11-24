import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const sideBarFloading = atom({
  key: 'sideBarFloading',
  default: false,
});

export const YesContent = atom({
  key: 'YesContent',
  default: 0,
});

export const NoContent = atom({
  key: 'NoContent',
  default: 0,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
