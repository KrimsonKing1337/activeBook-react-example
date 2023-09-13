import { useEffect } from 'react';

import effects from 'book_pages/effects.json';
import { useDispatch, useSelector } from 'activeBook-core/store';
import { effectsActions } from 'activeBook-core/store/effects/common';
import { mainSelectors } from 'activeBook-core/store/main';
import { getEffectInRange } from 'activeBook-core/utils/effects/rangeEffects';

import { DotsRangeEffect } from 'activeBook-core/@types';

export function useDotsInRange() {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const dotsInRange = getEffectInRange(effects, page, 'dots') as DotsRangeEffect;

    if (!dotsInRange) {
      dispatch(effectsActions.setDotsActiveState(false));

      return;
    }

    dispatch(effectsActions.setDotsActiveState(true));
  }, [page]);
}
