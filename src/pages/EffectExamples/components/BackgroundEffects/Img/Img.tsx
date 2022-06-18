import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { effectsActions } from 'store/effects/common';

import { Toggle } from 'components/Toggle';

export const Img = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectsActions.setBackgroundImgSrc('/assets/img/cinemagraph.gif'));
  }, []);

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectsActions.setBackgroundImgActiveState(value));
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
