import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';
import { Spoiler } from 'components/Spoiler';
import { playAchievement } from 'components/Menu/utils';

import styles from './Vibration.scss';

export const Vibration = () => {
  const dispatch = useDispatch();
  const vibrationState = useSelector(configSelectors.vibration);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setVibration(value));

    playAchievement();
  };

  return (
    <div className={styles.vibration}>
      <Toggle
        label={'Вибрация'}
        isActiveDefault={vibrationState}
        withoutBorder={true}
        onClickOn={() => toggleClickHandler(true)}
        onClickOff={() => toggleClickHandler(false)}
      />

      <Spoiler label="Не работает вибрация?">
        Проверьте, что у вас не включён беззвучный режим.
        Часто он не даёт вибрации срабатывать
      </Spoiler>
    </div>
  );
};
