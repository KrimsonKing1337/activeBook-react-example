import { useEffect } from 'react';

import { useDispatch, useSelector } from 'activeBook-core/store';
import { effectsActions } from 'activeBook-core/store/effects/common';
import { mainSelectors } from 'activeBook-core/store/main';

import { DotsRangeEffect } from '@types';

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
