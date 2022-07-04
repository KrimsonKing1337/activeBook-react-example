import { encryptStorage } from './encryptStorage';

const key = 'achievements';

export enum Flags {
  konami = 'konami',
  firstMove = 'firstMove',
}

function get(name: Flags) {
  const valuesAsJson = encryptStorage.getItem(key);

  if (!valuesAsJson) {
    return false;
  }

  const values = JSON.parse(valuesAsJson);

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
  };

  if (values) {
    newValues = JSON.parse(values);
  }

  newValues[name] = value;

  const newValuesAsJson = JSON.stringify(newValues);

  encryptStorage.setItem(key, newValuesAsJson);
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
