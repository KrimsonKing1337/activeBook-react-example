import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';

export const Flashlight = () => {
  const dispatch = useDispatch();
  const flashlightState = useSelector(configSelectors.flashlight);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setFlashlight(value));

    playAchievement();
  };

  return (
    <Toggle
      label={'Вспышка'}
      isActiveDefault={flashlightState}
      onClickOn={() => toggleClickHandler(true)}
      onClickOff={() => toggleClickHandler(false)}
    />
  );
};
