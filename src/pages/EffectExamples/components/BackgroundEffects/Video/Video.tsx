import React from 'react';
import { useDispatch } from 'react-redux';

import { effectsActions } from 'store/effects/common';

import { Toggle } from 'components/Toggle';

export const Video = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectsActions.setBackgroundVideoActiveState(value));
  };

  return (
    <Toggle
      label={'Видео на заднем фоне'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
