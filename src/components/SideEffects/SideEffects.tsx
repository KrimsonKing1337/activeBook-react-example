import React from 'react';
import { useSelector } from 'react-redux';

import { sideShadowEffectSelectors } from 'store/effects/sideShadow/selectors';
import { sideTextEffectSelectors } from 'store/effects/sideText/selectors';

import { SideShadow } from './components/SideShadow';

import styles from './SideEffects.scss';

export const SideEffects = () => {
  const sideShadowIsActive = useSelector(sideShadowEffectSelectors.isActive);
  const sideTextIsActive = useSelector(sideTextEffectSelectors.isActive);
  const sideShadowTemplate = useSelector(sideTextEffectSelectors.template);

  return (
    <div className={styles.sideEffects}>
      {sideShadowIsActive && <SideShadow />}
      {sideTextIsActive && (
        <>
          {sideShadowTemplate}
        </>
      )}
    </div>
  );
};
