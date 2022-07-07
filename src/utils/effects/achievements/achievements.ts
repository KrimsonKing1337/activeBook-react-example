import { achievements as achievementsLocalStorage, Flags } from 'utils/localStorage/achievements';

import { changeBgColor, Color, show } from './utils';

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

  changeBgColor(type);

  const achievements = achievementsLocalStorage.getAll();

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
}
