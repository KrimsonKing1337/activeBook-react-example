import { toast } from 'react-toastify';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

const howlInst = new HowlWrapper({
  src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});

export function play(text: string, id: string, save = true) {
  const show = () => {
    toast.success(`Achievement unlock: ${text}`, {
      onOpen: () => howlInst.play(),
    });
  };

  const saveIfNeeded = (value: string) => {
    if (save) {
      localStorage.setItem('achievements', value);
    }
  };

  const achievementsAsJson = localStorage.getItem('achievements');

  if (!achievementsAsJson) {
    show();

    const achievementsForWrite = JSON.stringify({
      [id]: true,
    });

    saveIfNeeded(achievementsForWrite);

    return;
  }

  const achievements = JSON.parse(achievementsAsJson);

  if (achievements[id] === true) {
    return;
  }

  show();

  const achievementsForWrite = JSON.stringify({
    ...achievements,
    [id]: true,
  });

  saveIfNeeded(achievementsForWrite);
}
