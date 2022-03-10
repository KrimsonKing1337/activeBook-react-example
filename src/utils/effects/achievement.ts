import { toast } from 'react-toastify';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

const howlInst = new HowlWrapper({
  src: ['/assets/book_data/audios/sounds/achievement-unlocked.mp3'],
});

export function play(text: string) {
  toast.success(`Achievement unlock: ${text}`, {
    onOpen: () => howlInst.play(),
  });
}
