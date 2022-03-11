import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setSideShadowActiveState } from 'store/effects/common/actions';

export function useSideShadow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSideShadowActiveState(true));

    return () => {
      dispatch(setSideShadowActiveState(false));
    };
  }, []);
}
