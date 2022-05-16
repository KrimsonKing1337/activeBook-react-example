import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { volumeSelectors } from 'store/volume/selectors';
import { setBg, setCommon, setMusic, setOther } from 'store/volume/actions';

import { Label } from 'components/Label';

import { Slider } from './components/Slider';

import styles from './Volume.scss';

export const Volume = () => {
  const dispatch = useDispatch();

  const commonVolume = useSelector(volumeSelectors.common);
  const bgVolume = useSelector(volumeSelectors.bg);
  const otherVolume = useSelector(volumeSelectors.other);
  const musicVolume = useSelector(volumeSelectors.music);

  const commonChangeHandler = (value: number) => {
    dispatch(setCommon(value));
  };

  const bgChangeHandler = (value: number) => {
    dispatch(setBg(value));
  };

  const otherChangeHandler = (value: number) => {
    dispatch(setOther(value));
  };

  const musicChangeHandler = (value: number) => {
    dispatch(setMusic(value));
  };

  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label={'Общая громкость'} />

        <Slider value={commonVolume} onChange={commonChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Громкость музыки'} />

        <Slider value={musicVolume} onChange={musicChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Звуки'} />

        <Slider value={otherVolume} onChange={otherChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Фоновые звуки'} />

        <Slider value={bgVolume} onChange={bgChangeHandler} />
      </div>
    </div>
  );
};
