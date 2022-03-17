import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { audioEffectsSelectors } from 'store/effects/audio/selectors';
import { setAudio as setAudioEffect } from 'store/effects/audio/actions';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

type AudioType = 'oneShot' | 'loop' | undefined;

type UseAudioProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
  type?: AudioType;
  loop?: boolean; // todo: убрать этот проп, завязываться на type: 'loop'
  playOnLoad?: boolean;
  stopBy?: number;
};

export function useAudio({
  src,
  fadeOutWhenUnload = true,
  type,
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

    dispatch(setAudioEffect(howlInst));
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
      }, 5000);
    }

    return () => {
      (async () => {
        if (!type) {
          audioInst.unload(fadeOutWhenUnload);

          return;
        }

        if (type === 'oneShot') {
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
