import { getInitValues } from 'utils/effects/achievements/utils';

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

export type FlagsWithoutHidden = Exclude<Flags, Flags.superEasterEggFound | Flags.konami>;

export const allAchievements = Object.values(Flags);

export const hiddenAchievements = [
  Flags.konami,
  Flags.superEasterEggFound,
];

export const dontNeededForAllAchievementsReward = [
  ...hiddenAchievements,
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
  [Flags.allEasterEggsFound]: 'Все пасхалки найдены',
  [Flags.konami]: 'Конами-код в сердце навсегда',
  [Flags.superEasterEggFound]: 'Супер-секрет найден',
  [Flags.allAchievementsRewarded]: 'Все награды получены',
};

export const order = {
  [Flags.firstMove]: 0,
  [Flags.volume]: 1,
  [Flags.fontSize]: 2,
  [Flags.bookmarks]: 3,
  [Flags.tableOfContents]: 4,
  [Flags.themes]: 5,
  [Flags.menuToggles]: 6,
  [Flags.allPagesSeen]: 7,
  [Flags.allEasterEggsFound]: 8,
  [Flags.konami]: 9,
  [Flags.superEasterEggFound]: 10,
  [Flags.allAchievementsRewarded]: 11,
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

  values[name] = value;

  encryptStorage.setItem(key, values);
}

function setAll(values: Record<Flags, boolean>) {
  encryptStorage.setItem(key, values);
}

function init() {
  const values = getInitValues();

  encryptStorage.setItem(key, values);
}

export const achievements = {
  set,
  setAll,
  get,
  getAll,
  key,
  init,
};
