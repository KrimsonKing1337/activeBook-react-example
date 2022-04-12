import { useDispatch } from 'react-redux';

import { setInverseColorActiveState } from 'store/effects/common/actions';

export function useInverseColor() {
  const dispatch = useDispatch();

  const on = () => dispatch(setInverseColorActiveState(true));
  const off = () => dispatch(setInverseColorActiveState(false));

  return {
    inverseColorOn: on,
    inverseColorOff: off,
  };
}
