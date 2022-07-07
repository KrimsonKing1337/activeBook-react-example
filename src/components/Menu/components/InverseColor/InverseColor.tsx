import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';

export const InverseColor = () => {
  const dispatch = useDispatch();
  const inverseColorState = useSelector(configSelectors.inverseColor);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setInverseColor(value));

    playAchievement();
  };

  return (
    <Toggle
      label={'Инверсия цвета'}
      isActiveDefault={inverseColorState}
      onClickOn={() => toggleClickHandler(true)}
      onClickOff={() => toggleClickHandler(false)}
    />
  );
};
