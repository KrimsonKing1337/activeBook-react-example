import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { sideShadowActions } from 'store/effects/side/shadow';
import { initialState } from 'store/effects/side/shadow/slice';

export type useSideShadowProps = {
  isActiveDefault?: boolean;
  color: string;
  speed?: number;
};

export function useSideShadow({ isActiveDefault = true, color, speed = initialState.speed }: useSideShadowProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(sideShadowActions.setActiveState(true));
  };

  const off = () => {
    dispatch(sideShadowActions.setActiveState(false));
  };

  useEffect(() => {
    console.log('___ color', color);

    dispatch(sideShadowActions.setColor(color));
    dispatch(sideShadowActions.setSpeed(speed));
    dispatch(sideShadowActions.setActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideShadowOn: on, sideShadowOff: off };
}
