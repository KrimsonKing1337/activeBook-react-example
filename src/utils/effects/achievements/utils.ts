import { toast } from 'react-toastify';

import { store } from 'store';

import { mainActions } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

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

  store.dispatch(mainActions.setAchievementToastBgColor(color));
}
