import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/music';
import { mainSelectors } from 'store/main';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

type UseMusicProps = {
  src: string;
  loop?: boolean;
  range: {
    from: number;
    to: number;
  }
};

export function useMusic({ src, loop = true, range }: UseMusicProps) {
  const dispatch = useDispatch();

  const [music, setMusic] = useState<HowlWrapper>();

  const musicInst = useSelector(musicEffectsSelectors.musicInst);
  const page = useSelector(mainSelectors.page);

  const { from, to } = range;

  const isInRange = page >= from && page <= to;

  useEffect(() => {
    // if (isInRange && musicInst?.isPlaying) {
    if (isInRange && musicInst) {
      return;
    }

    const howlInst = new HowlWrapper({
      src: [src],
      type: 'music',
      loop,
      range,
    });

    dispatch(musicEffectsActions.setMusic(howlInst));
  }, []);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    if (isInRange && musicInst.isPlaying) {
      return;
    }

    setMusic(musicInst);

    musicInst.play();

    return () => {
      musicInst.unload(true);
    };
  }, [musicInst]);

  return music;
}

export function useMusicUnload() {
  const musicInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    musicInst.unload();
  }, []);
}
