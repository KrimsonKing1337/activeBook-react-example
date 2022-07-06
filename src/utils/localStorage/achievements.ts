import { encryptStorage } from './encryptStorage';

const key = 'achievements';

export enum Flags {
  konami = 'konami',
  firstMove = 'firstMove',
  allPagesSeen = 'allPagesSeen',
  allEasterEggsFound = 'allEasterEggsFound',
  superEasterEggFound = 'superEasterEggFound',
  allAchievementsRewarded = 'allAchievementsRewarded',
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
    [Flags.allEasterEggsFound]: false,
    [Flags.superEasterEggFound]: false,
    [Flags.allAchievementsRewarded]: false,
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
