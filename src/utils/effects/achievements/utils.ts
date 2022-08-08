import { toast } from 'react-toastify';

import { store } from 'store';

import { achievementsActions } from 'store/achievements';
import { Achievement } from 'store/achievements/@types';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { achievements as achievementsLocalStorage } from 'utils/localStorage/achievements';

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

const howlInst = new HowlWrapper({
  src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});

export const show = (text: string) => {
  toast.success(`Achievement unlock: ${text}`, {
    onOpen: () => howlInst.play(),
  });
};

export type Color = 'regular' | 'gold' | 'platinum';

export const typesVoc: Record<Color, string> = {
  regular: '#07bc0c',
  gold: '#f1c40f',
  platinum: '#757575',
};

export function changeBgColor(type: Color) {
  const color = typesVoc[type];

  store.dispatch(achievementsActions.setToastBgColor(color));
}

export function dispatchSetAchievement(value: Achievement) {
  store.dispatch(achievementsActions.setAchievement(value));
}

export function getLength() {
  return store.getState().achievements.length;
}

export function getRewardedLengthWithoutUnnecessary() {
  const achievements = achievementsLocalStorage.getAll();

  const achievementsRewardedForCounting = { ...achievements };

  dontNeededForAllAchievementsReward.forEach((cur) => {
    delete achievementsRewardedForCounting[cur];
  });

  const achievementsRewardedForCountingFiltered = Object.values(achievementsRewardedForCounting).filter((cur) => {
    return cur === true;
  });

  return achievementsRewardedForCountingFiltered.length;
}

export function getInitValues() {
  const values: Record<string, boolean> = {};

  allAchievements.forEach((achievementCur) => {
    values[achievementCur] = false;
  });

  return values;
}
