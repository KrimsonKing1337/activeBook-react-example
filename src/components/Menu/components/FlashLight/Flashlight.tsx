import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';

import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';

import { off as flashlightOff, on as flashlightOn } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

export const Flashlight = () => {
  const dispatch = useDispatch();

  const flashlightState = useSelector(configSelectors.flashlight);
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const toggleClickHandler = async (value: boolean) => {
    dispatch(configActions.setFlashlight(value));

    playAchievement();

    if (value && isFlashlightAvailable) {
      flashlightOn();

      await sleep(300);

      flashlightOff();
    }
  };

  return (
    <Toggle
      label={'Вспышка (там, где доступно)'}
      isActiveDefault={flashlightState}
      onClickOn={() => toggleClickHandler(true)}
      onClickOff={() => toggleClickHandler(false)}
    />
  );
};
