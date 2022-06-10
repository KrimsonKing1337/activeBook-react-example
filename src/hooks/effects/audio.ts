import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio';

import { HowlWrapper, HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

type UseAudioProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
  bg?: boolean;
  oneShot?: boolean;
  loop?: boolean;
  playOnLoad?: boolean;
  stopBy?: number;
};

export function useAudio({
  src,
  fadeOutWhenUnload = true,
  bg = false,
  oneShot = false,
  loop = false,
  playOnLoad = false,
  stopBy = 0,
}: UseAudioProps) {
  const dispatch = useDispatch();

  const audioInst = useSelector(audioEffectsSelectors.audioInst);

  useEffect(() => {
    const opt: HowlWrapperOptions = {
      src: [src],
      loop,
    };

    if (bg) {
      opt.type = 'bg';
    }

    const howlInst = new HowlWrapper(opt);

    dispatch(audioEffectsActions.setAudio(howlInst));
  }, []);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    if (playOnLoad) {
      audioInst.play();
    }

    let timer: NodeJS.Timer | null = null;

    if (stopBy) {
      timer = setTimeout(() => {
        audioInst.stop();
      }, stopBy);
    }

    return () => {
      if (!audioInst || audioInst.isUnloading) {
        return;
      }

      (async () => {
        if (oneShot) {
          await audioInst.waitTillTheEnd();
        }

        audioInst.unload(fadeOutWhenUnload);

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [audioInst]);

  return audioInst;
}
