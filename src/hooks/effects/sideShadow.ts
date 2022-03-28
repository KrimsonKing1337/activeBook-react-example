import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setActiveState, setColor, setSpeed } from 'store/effects/sideShadow/actions';
import { initialState } from 'store/effects/sideShadow/initialState';

export type useSideShadowProps = {
  isActiveDefault?: boolean;
  color: string;
  speed?: number;
};

export function useSideShadow({ isActiveDefault = true, color, speed = initialState.speed }: useSideShadowProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(setActiveState(true));
  };

  const off = () => {
    dispatch(setActiveState(false));
  };

  useEffect(() => {
    dispatch(setColor(color));
    dispatch(setSpeed(speed));
    dispatch(setActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideShadowOn: on, sideShadowOff: off };
}
