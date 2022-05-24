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
  const regularVolume = useSelector(volumeSelectors.regular);
  const musicVolume = useSelector(volumeSelectors.music);

  const commonChangeHandler = (value: number) => {
    dispatch(volumeActions.setGlobal(value));
  };

  const bgChangeHandler = (value: number) => {
    dispatch(volumeActions.setBg(value));
  };

  const otherChangeHandler = (value: number) => {
    dispatch(volumeActions.setRegular(value));
  };

  const musicChangeHandler = (value: number) => {
    dispatch(volumeActions.setMusic(value));
  };

  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label={'Общая громкость'} />

        <Slider value={globalVolume} onChange={commonChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Громкость музыки'} />

        <Slider value={musicVolume} onChange={musicChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Звуки'} />

        <Slider value={regularVolume} onChange={otherChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Фоновые звуки'} />

        <Slider value={bgVolume} onChange={bgChangeHandler} />
      </div>
    </div>
  );
};
