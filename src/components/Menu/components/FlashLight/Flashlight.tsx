import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';

export const Flashlight = () => {
  const dispatch = useDispatch();
  const flashlightState = useSelector(configSelectors.flashlight);

  const toggleClickOnHandler = () => {
    dispatch(configActions.setFlashlight(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(configActions.setFlashlight(false));
  };

  return (
    <Toggle
      label={'Вспышка'}
      isActiveDefault={flashlightState}
      onClickOn={toggleClickOnHandler}
      onClickOff={toggleClickOffHandler}
    />
  );
};
