import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';

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
    <Toggle
      label={'Вибрация'}
      isActiveDefault={vibrationState}
      onClickOn={toggleClickOnHandler}
      onClickOff={toggleClickOffHandler}
    />
  );
};
