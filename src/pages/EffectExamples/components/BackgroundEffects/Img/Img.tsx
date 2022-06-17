import React from 'react';
import { useDispatch } from 'react-redux';

import { effectExamplesActions } from 'store/effectExamples';

import { Toggle } from 'components/Toggle';

export const Img = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectExamplesActions.setBackgroundImgActiveState(value));
  };

  return (
    <Toggle
      label={'Изображение на заднем фоне'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
