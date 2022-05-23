import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';

export const InverseColor = () => {
  const dispatch = useDispatch();
  const inverseColorState = useSelector(configSelectors.inverseColor);

  const toggleClickOnHandler = () => {
    dispatch(configActions.setInverseColor(true));
  };

  const toggleClickOffHandler = () => {
    dispatch(configActions.setInverseColor(false));
  };

  return (
    <Toggle
      label={'Инверсия цвета'}
      isActiveDefault={inverseColorState}
      onClickOn={toggleClickOnHandler}
      onClickOff={toggleClickOffHandler}
    />
  );
};
