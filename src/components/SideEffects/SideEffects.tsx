import { useSelector } from 'activeBook-core/store';
import { sideShadowEffectSelectors } from 'activeBook-core/store/effects/side/shadow';
import { sideTextEffectSelectors } from 'activeBook-core/store/effects/side/text';

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
