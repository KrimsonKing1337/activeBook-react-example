import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { volumeActions, volumeSelectors } from 'store/volume';

import { Label } from 'components/Label';

import { Slider } from './components/Slider';

import styles from './Volume.scss';

export const Volume = () => {
  const dispatch = useDispatch();

  const globalVolume = useSelector(volumeSelectors.global);
  const bgVolume = useSelector(volumeSelectors.bg);
  const sfxVolume = useSelector(volumeSelectors.sfx);
  const musicVolume = useSelector(volumeSelectors.music);

  const globalChangeHandler = (value: number) => {
    dispatch(volumeActions.setGlobal(value));
  };

  const bgChangeHandler = (value: number) => {
    dispatch(volumeActions.setBg(value));
  };

  const sfxChangeHandler = (value: number) => {
    dispatch(volumeActions.setSfx(value));
  };

  const musicChangeHandler = (value: number) => {
    dispatch(volumeActions.setMusic(value));
  };

  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label={'Общая громкость'} />

        <Slider value={globalVolume} onChange={globalChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Громкость музыки'} />

        <Slider value={musicVolume} onChange={musicChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'SFX'} />

        <Slider value={sfxVolume} onChange={sfxChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Фоновые звуки'} />

        <Slider value={bgVolume} onChange={bgChangeHandler} />
      </div>
    </div>
  );
};
