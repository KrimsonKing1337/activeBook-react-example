import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { soundEffectsActions, soundEffectsSelectors } from 'store/effects/audio/sound';

import { HowlWrapper, HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

type UseSoundProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
  bg?: boolean;
  oneShot?: boolean;
  loop?: boolean;
  playOnLoad?: boolean;
  stopBy?: number;
  delay?: number;
  screamer?: boolean;
};

export function useSound({
  src,
  fadeOutWhenUnload = true,
  bg = false,
  oneShot = false,
  loop = false,
  playOnLoad = false,
  stopBy = 0,
  delay = 0,
  screamer = false,
}: UseSoundProps) {
  const dispatch = useDispatch();

  const soundInst = useSelector(soundEffectsSelectors.soundInst);

  useEffect(() => {
    const opt: HowlWrapperOptions = {
      src: [src],
      loop,
      screamer,
    };

    if (bg) {
      opt.type = 'bg';
    }

    const howlInst = new HowlWrapper(opt);

    dispatch(soundEffectsActions.setSound(howlInst));
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timer | null = null;

    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    if (playOnLoad) {
      timer = setTimeout(() => {
        soundInst.play();
      }, delay);
    }

    if (stopBy) {
      timer = setTimeout(() => {
        soundInst.stop();
      }, stopBy);
    }

    return () => {
      if (!soundInst || soundInst.isUnloading) {
        return;
      }

      (async () => {
        if (oneShot) {
          await soundInst.waitTillTheEnd();
        }

        soundInst.unload(fadeOutWhenUnload);

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [soundInst]);

  return soundInst;
}
