import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setVibration } from 'store/config/actions';
import { configSelectors } from 'store/config/selectors';

import { Toggle } from 'components/Toggle';

export const Vibration = () => {
  const dispatch = useDispatch();
  const vibrationState = useSelector(configSelectors.vibration);

  const toggleClickOnHandler = () => {
    dispatch(setVibration(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(setVibration(false));
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
