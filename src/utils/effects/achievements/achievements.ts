import { toast } from 'react-toastify';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { achievements as achievementsLocalStorage, Flags } from 'utils/localStorage/achievements';

const howlInst = new HowlWrapper({
  src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});

export function play(text: string, id: Flags, save = true) {
  const show = () => {
    toast.success(`Achievement unlock: ${text}`, {
      onOpen: () => howlInst.play(),
    });
  };

  const saveIfNeeded = () => {
    if (save) {
      achievementsLocalStorage.set(id, true);
    }
  };

  const achievements = achievementsLocalStorage.getAll();

  if (!achievements) {
    show();

    saveIfNeeded();

    return;
  }

  if (achievements[id] === true) {
    return;
  }

  show();

  saveIfNeeded();
}
