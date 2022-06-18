import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { effectsActions } from 'store/effects/common';

import { Toggle } from 'components/Toggle';

export const Video = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectsActions.setBackgroundVideoSrc('/assets/videos/TV_static-2.mp4'));
  }, []);

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
