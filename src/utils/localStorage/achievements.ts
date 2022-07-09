import { encryptStorage } from './encryptStorage';

const key = 'achievements';

export enum Flags {
  konami = 'konami',
  firstMove = 'firstMove',
  volume = 'volume',
  fontSize = 'fontSize',
  bookmarks = 'bookmarks',
  tableOfContents = 'tableOfContents',
  themes = 'themes',
  menuToggles = 'menuToggles',
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

export const namesVoc = {
  [Flags.firstMove]: 'Первый шаг',
  [Flags.volume]: 'Лучше громко, чем тихо',
  [Flags.fontSize]: 'Играл со шрифтами, проиграл',
  [Flags.bookmarks]: 'Лучшие закладки - в книге',
  [Flags.tableOfContents]: 'Прыгаем по главам, но не по головам',
  [Flags.themes]: 'Все темы хороши, но лучше тёмная',
  [Flags.menuToggles]: 'Туда-сюдашечки',
  [Flags.allPagesSeen]: 'Все страницы прочитаны',
  [Flags.allAchievementsRewarded]: 'Все награды получены',
};

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
