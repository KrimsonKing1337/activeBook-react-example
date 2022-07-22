import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { backgroundVideoEffectActions } from 'store/effects/background/video';

import { Toggle } from 'components/Toggle';

export const Video = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(backgroundVideoEffectActions.setSrc('/assets/videos/TV_static-2.mp4'));
  }, []);

  const buttonClickHandler = (value: boolean) => {
    dispatch(backgroundVideoEffectActions.setActiveState(value));
  };

  return (
    <Toggle
      label="Видео на заднем фоне"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
