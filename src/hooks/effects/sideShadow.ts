import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setSideShadowActiveState, setSideShadowColor, setSideShadowSpeed } from 'store/effects/sideShadow/actions';

export type useSideShadowProps = {
  color: string;
  speed?: number;
};

export function useSideShadow({ color, speed = 1000 }: useSideShadowProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSideShadowColor(color));
    dispatch(setSideShadowSpeed(speed));
    dispatch(setSideShadowActiveState(true));

    return () => {
      dispatch(setSideShadowActiveState(false));
    };
  }, []);
}
