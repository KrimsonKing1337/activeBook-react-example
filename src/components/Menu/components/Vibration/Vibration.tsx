import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';
import { Spoiler } from 'components/Spoiler';

import styles from './Vibration.scss';

export const Vibration = () => {
  const dispatch = useDispatch();
  const vibrationState = useSelector(configSelectors.vibration);

  const toggleClickOnHandler = () => {
    dispatch(configActions.setVibration(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(configActions.setVibration(false));
  };

  return (
    <div className={styles.vibration}>
      <Toggle
        label={'Вибрация'}
        isActiveDefault={vibrationState}
        withoutBorder={true}
        onClickOn={toggleClickOnHandler}
        onClickOff={toggleClickOffHandler}
      />

      <Spoiler label="Не работает вибрация?">
        Проверьте, что у вас не включён беззвучный режим.
        Часто он не даёт вибрации срабатывать
      </Spoiler>
    </div>
  );
};
