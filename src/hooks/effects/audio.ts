import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { audioEffectsSelectors } from 'store/effects/audio/reducer';
import { setAudio as setAudioEffect } from 'store/effects/audio/actions';

import { HowlWrapper } from 'utils/book/HowlWrapper';

type AudioType = 'oneShot' | 'loop' | undefined;

type UseAudioProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
  type?: AudioType;
};

export function useAudio({ src, fadeOutWhenUnload = true, type }: UseAudioProps) {
  const dispatch = useDispatch();

  const [audio, setAudio] = useState<HowlWrapper>();

  const audioInst = useSelector(audioEffectsSelectors.audioInst);

  useEffect(() => {
    const howlInst = new HowlWrapper({
      src: [src],
    });

    dispatch(setAudioEffect(howlInst));
  }, []);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    setAudio(audioInst);

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
      })();
    };
  }, [audioInst]);

  return audio;
}
