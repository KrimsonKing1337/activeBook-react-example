import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { audioEffectsSelectors } from 'store/effects/audio/reducer';
import { setAudio as setAudioEffect } from 'store/effects/audio/actions';

import { HowlWrapper } from 'utils/book/HowlWrapper';

type UseAudioProps = {
  src: string;
  fadeOutWhenUnload?: boolean;
};

export function useAudio({ src, fadeOutWhenUnload = true }: UseAudioProps) {
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
      audioInst.unload(fadeOutWhenUnload);
    };
  }, [audioInst]);

  return audio;
}
