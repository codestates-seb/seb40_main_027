import { atom } from 'recoil';

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
});
