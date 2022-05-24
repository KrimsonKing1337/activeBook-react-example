import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

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

  const [audio, setAudio] = useState<HowlWrapper>();

  const audioInst = useSelector(audioEffectsSelectors.audioInst);

  useEffect(() => {
    const howlInst = new HowlWrapper({
      src: [src],
      loop,
    });

    dispatch(audioEffectsActions.setAudio(howlInst));
  }, []);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    setAudio(audioInst);

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
      (async () => {
        if (!bg && !oneShot) {
          audioInst.unload(fadeOutWhenUnload);

          return;
        }

        if (oneShot) {
          await audioInst.waitTillTheEnd();

          audioInst.unload(fadeOutWhenUnload);
        }

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [audioInst]);

  return audio;
}
