import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AudioRangeEffect } from '@types';

import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useMusicInRange() {
  const dispatch = useDispatch();

  const [musicInRange, setMusicInRange] = useState<AudioRangeEffect>();

  const page = useSelector(mainSelectors.page);
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    const musicInRange: AudioRangeEffect = getEffectInRange(page, 'music');

    if (!musicInRange) {
      musicInst?.unload(true);

      setMusicInRange(undefined);

      dispatch(musicEffectsActions.setMusic(null));

      return;
    }

    setMusicInRange(musicInRange);

    const { src, id } = musicInRange;

    if (musicInst?.id === id) {
      if (!musicInst?.playing()) {
        musicInst?.play();
      }

      return;
    }

    const howlInst = new HowlWrapper({
      id,
      src: [src],
      type: 'music',
      loop: true,
    });

    dispatch(musicEffectsActions.setMusic(howlInst));
  }, [page]);

  useEffect(() => {
    if (!musicInRange) {
      return;
    }

    if (!musicInst || musicInst.isUnloading) {
      if (musicInst?.state() !== 'unloaded') {
        return;
      }
    }

    if (musicInst?.id === musicInRange?.id && musicInst.playing()) {
      return;
    }

    musicInst.play();
  }, [musicInst, musicInRange]);

  return musicInRange;
}

export function useMusicInRangeUnload() {
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    musicInst.unload();
  }, []);
}
