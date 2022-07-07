import { achievements as achievementsLocalStorage, Flags } from 'utils/localStorage/achievements';

import { changeBgColor, Color, getLength, getRewardedLengthWithoutUnnecessary, show } from './utils';

export type PlayProps = {
  text: string;
  id: Flags;
  save?: boolean;
  type?: Color;
};

export function play({ text, id, save, type = 'regular' }: PlayProps) {
  const saveIfNeeded = () => {
    if (save) {
      achievementsLocalStorage.set(id, true);
    }
  };

  const achievements = achievementsLocalStorage.getAll();

  const achievementsFiltered = Object.values(achievements).filter((cur) => cur === false);

  // если все ачивки получены, то тут и делать нечего
  if (achievementsFiltered.length === 0) {
    return;
  }

  changeBgColor(type);

  if (!achievements) {
    show(text);

    saveIfNeeded();

    return;
  }

  if (achievements[id] === true) {
    return;
  }

  show(text);

  saveIfNeeded();

  playAllAchievementsRewardWhenReady();
}

function playAllAchievementsRewardWhenReady() {
  const achivsLength = getLength();
  const achivsRewardedLength = getRewardedLengthWithoutUnnecessary();

  if (achivsLength === achivsRewardedLength) {
    play({
      id: Flags.allAchievementsRewarded,
      text: 'Поздравляю! Вы получили все ачивки!',
      type: 'platinum',
    });
  }
}
