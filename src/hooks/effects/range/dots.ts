import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DotsRangeEffect } from '@types';

import { effectsActions } from 'store/effects/common';
import { mainSelectors } from 'store/main';

import { getEffectInRange } from 'utils/effects/rangeEffects';

export function useDotsInRange() {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const dotsInRange: DotsRangeEffect = getEffectInRange(page, 'dots');

    if (!dotsInRange) {
      dispatch(effectsActions.setDotsActiveState(false));

      return;
    }

    dispatch(effectsActions.setDotsActiveState(true));
  }, [page]);
}
