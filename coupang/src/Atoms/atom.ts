import { atom } from 'recoil';

export const searchTextAtom = atom<string>({
  key: 'searchTextInputAtomKey',
  default: '',
});

export const mainKeywordAtom = atom<any[]>({
  key: 'mainKeywordAtomKey',
  default: [],
});

export const filteredItemAtom = atom<string>({
  key: 'filteredItemAtomKey',
  default: '',
});

export const indexStateAtom = atom<boolean>({
  key: 'indexStateAtomKey',
  default: false,
});
