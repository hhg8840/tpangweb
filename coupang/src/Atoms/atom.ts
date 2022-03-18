import { IData } from '@customTypes/allTypes';
import { atom } from 'recoil';

export const searchTextAtom = atom<string>({
  key: 'searchTextInputAtom',
  default: '',
});

export const mainKeywordAtom = atom<any[]>({
  key: 'mainKeywordAtom',
  default: [],
});

export const filteredItemAtom = atom<string>({
  key: 'filteredItemAtom',
  default: '',
});

export const indexStateAtom = atom<boolean>({
  key: 'indexStateAtom',
  default: false,
});
