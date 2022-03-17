import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setSideShadowActiveState, setSideShadowColor, setSideShadowSpeed } from 'store/effects/sideShadow/actions';

export type useSideShadowProps = {
  isActiveDefault?: boolean;
  color: string;
  speed?: number;
};

export function useSideShadow({ isActiveDefault = true, color, speed = 1000 }: useSideShadowProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(setSideShadowActiveState(true));
  };

  const off = () => {
    dispatch(setSideShadowActiveState(false));
  };

  useEffect(() => {
    dispatch(setSideShadowColor(color));
    dispatch(setSideShadowSpeed(speed));
    dispatch(setSideShadowActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideShadowOn: on, sideShadowOff: off };
}
