import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const createMyJsonStorage = () => {
  const storage = createJSONStorage(() => localStorage);
  const getItem = (key: string) => {
    const value = storage.getItem(key);
    return value;
  };
  return { ...storage, getItem };
};

export const privateKeyAtom = atomWithStorage('privateKey', {}, createMyJsonStorage());
