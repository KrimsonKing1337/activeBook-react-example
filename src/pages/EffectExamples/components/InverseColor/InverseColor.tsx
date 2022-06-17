import React from 'react';
import { useDispatch } from 'react-redux';

import { effectExamplesActions } from 'store/effectExamples';

import { Toggle } from 'components/Toggle';

export const InverseColor = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectExamplesActions.setInverseColorActiveState(value));
  };

  return (
    <Toggle
      label={'Инверсия цвета'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
