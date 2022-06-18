import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AudioRangeEffect } from '@types';

import { soundBgEffectsActions, soundBgEffectsSelectors } from 'store/effects/audio/soundBg';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useAudioInRange() {
  const dispatch = useDispatch();

  const [audioInRange, setAudioInRange] = useState<AudioRangeEffect>();

  const page = useSelector(mainSelectors.page);
  const soundInst = useSelector(soundBgEffectsSelectors.soundInst);

  useEffect(() => {
    const audioInRange: AudioRangeEffect = getEffectInRange(page, 'audio');

    if (!audioInRange) {
      soundInst?.unload(true);

      dispatch(soundBgEffectsActions.setSound(null));

      return;
    }

    setAudioInRange(audioInRange);

    const { src, id } = audioInRange;

    if (soundInst?.id === id) {
      return;
    }

    const howlInst = new HowlWrapper({
      id,
      src: [src],
      type: 'bg',
      loop: true,
    });

    dispatch(soundBgEffectsActions.setSound(howlInst));
  }, [page]);

  useEffect(() => {
    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    if (soundInst?.id === audioInRange?.id && soundInst.playing()) {
      return;
    }

    soundInst.play();
  }, [soundInst, audioInRange]);

  return soundInst;
}

export function useAudioInRangeUnload() {
  const soundInst = useSelector(soundBgEffectsSelectors.soundInst);

  useEffect(() => {
    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    soundInst.unload();
  }, []);
}
