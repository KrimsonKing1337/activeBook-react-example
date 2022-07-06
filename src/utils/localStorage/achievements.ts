import { encryptStorage } from './encryptStorage';

const key = 'achievements';

export enum Flags {
  konami = 'konami',
  firstMove = 'firstMove',
  allPagesSeen = 'allPagesSeen',
}

function get(name: Flags) {
  const values = encryptStorage.getItem(key);

  if (!values) {
    return false;
  }

  return values[name];
}

function getAll() {
  return encryptStorage.getItem(key);
}

function set(name: Flags, value: boolean) {
  const values = encryptStorage.getItem(key);

  let newValues = {
    [Flags.konami]: false,
    [Flags.firstMove]: false,
    [Flags.allPagesSeen]: false,
  };

  if (values) {
    newValues = values;
  }

  newValues[name] = value;

  encryptStorage.setItem(key, newValues);
}

function setAll(values: Record<Flags, boolean>) {
  encryptStorage.setItem(key, values);
}

export const achievements = {
  set,
  setAll,
  get,
  getAll,
  key,
};
