import { useEffect } from 'react';

import { useDispatch } from 'activeBook-core/store';
import { backgroundVideoEffectActions } from 'activeBook-core/store/effects/background/video';
import { Toggle } from 'activeBook-core/components/Toggle';

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
