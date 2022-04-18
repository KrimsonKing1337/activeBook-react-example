import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { musicEffectsSelectors } from 'store/effects/music/selectors';
import { setMusic as setMusicEffect } from 'store/effects/music/actions';
import { mainSelectors } from 'store/main/selectors';

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

  // todo: где-то здесь ошибка, задваивается музыка
  useEffect(() => {
    if (isInRange && musicInst?.isPlaying) {
      return;
    }

    const howlInst = new HowlWrapper({
      src: [src],
      loop,
      range,
    });

    dispatch(setMusicEffect(howlInst));
  }, []);

  useEffect(() => {
    if (!musicInst || musicInst.isUnloading) {
      return;
    }

    if (isInRange && musicInst?.isPlaying) {
      return;
    }

    setMusic(musicInst);

    musicInst.play();
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
