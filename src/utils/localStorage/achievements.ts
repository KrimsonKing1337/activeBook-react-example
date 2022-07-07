import { encryptStorage } from './encryptStorage';

const key = 'achievements';

export enum Flags {
  konami = 'konami',
  firstMove = 'firstMove',
  volume = 'volume',
  fontSize = 'fontSize',
  bookmarks = 'bookmarks',
  allPagesSeen = 'allPagesSeen',
  allEasterEggsFound = 'allEasterEggsFound',
  superEasterEggFound = 'superEasterEggFound',
  allAchievementsRewarded = 'allAchievementsRewarded',
}

export const allAchievements = Object.values(Flags);

export const dontNeededForAllAchievementsReward = [
  Flags.konami,
  Flags.superEasterEggFound,
  Flags.allAchievementsRewarded,
];

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

  let newValues: Record<string, boolean> = {};

  allAchievements.forEach((achievementCur) => {
    newValues[achievementCur] = false;
  });

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
