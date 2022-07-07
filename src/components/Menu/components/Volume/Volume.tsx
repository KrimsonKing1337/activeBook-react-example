import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { volumeActions, volumeSelectors } from 'store/volume';

import { Label } from 'components/Label';

import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/localStorage/achievements';

import { Slider } from './components/Slider';

import styles from './Volume.scss';

const playAchievement = () => {
  play({
    id: Flags.volume,
    text: 'Тонкая настройка громкости - класс!',
  });
};

export const Volume = () => {
  const dispatch = useDispatch();

  const globalVolume = useSelector(volumeSelectors.global);
  const bgVolume = useSelector(volumeSelectors.bg);
  const sfxVolume = useSelector(volumeSelectors.sfx);
  const musicVolume = useSelector(volumeSelectors.music);

  const afterChangeHandler = () => {
    playAchievement();
  };

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

  /*
  * пытался то, что ниже переделать в массив и map(),
  * но получаю ошибку: Can't perform a React state update on an unmounted component
  */
  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label={'Общая громкость'} />

        <Slider value={globalVolume} onChange={globalChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Громкость музыки'} />

        <Slider value={musicVolume} onChange={musicChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'SFX'} />

        <Slider value={sfxVolume} onChange={sfxChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label={'Фоновые звуки'} />

        <Slider value={bgVolume} onChange={bgChangeHandler} onAfterChange={afterChangeHandler} />
      </div>
    </div>
  );
};
