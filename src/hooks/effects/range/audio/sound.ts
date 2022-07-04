import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AudioRangeEffect } from '@types';

import { soundBgEffectsActions, soundBgEffectsSelectors } from 'store/effects/audio/soundBg';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useAudioInRange() {
  const dispatch = useDispatch();

  const [soundInRange, setSoundInRange] = useState<AudioRangeEffect>();

  const page = useSelector(mainSelectors.page);
  const soundInst = useSelector(soundBgEffectsSelectors.soundInst);

  useEffect(() => {
    const soundInRange: AudioRangeEffect = getEffectInRange(page, 'bg');

    if (!soundInRange) {
      soundInst?.unload(true);

      dispatch(soundBgEffectsActions.setSound(null));

      return;
    }

    setSoundInRange(soundInRange);

    const { src, id } = soundInRange;

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

    if (soundInst?.id === soundInRange?.id && soundInst.playing()) {
      return;
    }

    let timer: NodeJS.Timer | null = null;

    const delay = soundInRange?.delay || 0;

    timer = setTimeout(() => {
      soundInst.play();
    }, delay);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [soundInst, soundInRange]);

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
