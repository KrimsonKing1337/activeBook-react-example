import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RangeEffect } from '@types';

import { audioBgEffectsActions, audioBgEffectsSelectors } from 'store/effects/audioBg';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { isEffectInRange } from 'utils/effects/rangeEffects';

export function useAudioInRange() {
  const dispatch = useDispatch();

  const [audioInRange, setAudioInRange] = useState<RangeEffect>();

  const page = useSelector(mainSelectors.page);
  const audioInst = useSelector(audioBgEffectsSelectors.audioInst);

  useEffect(() => {
    const audioInRange = isEffectInRange(page, 'audio');

    if (!audioInRange) {
      audioInst?.unload(true);

      dispatch(audioBgEffectsActions.setAudio(null));

      return;
    }

    setAudioInRange(audioInRange);

    const { src, id } = audioInRange;

    if (audioInst?.id === id) {
      return;
    }

    const howlInst = new HowlWrapper({
      id,
      src: [src],
      type: 'bg',
      loop: true,
    });

    dispatch(audioBgEffectsActions.setAudio(howlInst));
  }, [page]);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    if (audioInst?.id === audioInRange?.id && audioInst.playing()) {
      return;
    }

    audioInst.play();
  }, [audioInst, audioInRange]);

  return audioInst;
}

export function useAudioInRangeUnload() {
  const audioInst = useSelector(audioBgEffectsSelectors.audioInst);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    audioInst.unload();
  }, []);
}
