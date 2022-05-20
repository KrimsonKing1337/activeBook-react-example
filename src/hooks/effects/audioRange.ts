import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RangeEffect } from '@types';

import { musicEffectsSelectors } from 'store/effects/music/selectors';
import { setMusic as setMusicEffect } from 'store/effects/music/actions';
import { mainSelectors } from 'store/main/selectors';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { isEffectInRange } from 'utils/effects/rangeEffects';

export function useAudioRange() {
  const dispatch = useDispatch();

  const [audio, setAudio] = useState<HowlWrapper>();
  const [audioInRange, setAudioInRange] = useState<RangeEffect>();

  const page = useSelector(mainSelectors.page);
  const audioInst = useSelector(musicEffectsSelectors.musicInst); // todo: поменять на audioBg, создать его в сторе

  useEffect(() => {
    const audioInRange = isEffectInRange(page, 'audio');

    if (!audioInRange) {
      audioInst?.stop();

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
      // type: 'bgAudio', // todo
      loop: true,
    });

    dispatch(setMusicEffect(howlInst));
  }, [page]);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    if (audioInst?.id === audioInRange?.id && audioInst.isPlaying) {
      return;
    }

    setAudio(audioInst);

    audioInst.play();
  }, [audioInst, audioInRange]);

  return audio;
}

export function useAudioRangeUnload() {
  const audioInst = useSelector(musicEffectsSelectors.musicInst);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    audioInst.unload();
  }, []);
}
