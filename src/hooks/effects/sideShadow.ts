import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setActiveState, setColor, setSpeed } from 'store/effects/sideShadow/actions';

export type useSideShadowProps = {
  isActiveDefault?: boolean;
  color: string;
  speed?: number;
};

export function useSideShadow({ isActiveDefault = true, color, speed = 1000 }: useSideShadowProps) {
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
