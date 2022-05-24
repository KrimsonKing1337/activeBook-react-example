import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RangeEffect } from '@types';

import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/music';
import { mainSelectors } from 'store/main/selectors';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { isEffectInRange } from 'utils/effects/rangeEffects';

export function useMusicInRange() {
  const dispatch = useDispatch();

  const [music, setMusic] = useState<HowlWrapper>();
  const [musicInRange, setMusicInRange] = useState<RangeEffect>();

  const page = useSelector(mainSelectors.page);
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    const musicInRange = isEffectInRange(page, 'music');

    if (!musicInRange) {
      musicInst?.stop();

      return;
    }

    setMusicInRange(musicInRange);

    const { src, id } = musicInRange;

    if (musicInst?.id === id) {
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
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    if (musicInst?.id === musicInRange?.id && musicInst.isPlaying) {
      return;
    }

    setMusic(musicInst);

    musicInst.play();
  }, [musicInst, musicInRange]);

  return music;
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
