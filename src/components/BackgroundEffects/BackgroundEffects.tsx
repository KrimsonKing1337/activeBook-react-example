import React from 'react';
import { useSelector } from 'react-redux';

import { effectsSelectors } from 'store/effects/common';
import { backgroundVideoEffectSelectors } from 'store/effects/background/video';
import { backgroundImgEffectSelectors } from 'store/effects/background/img';

import { Video } from 'components/Video';
import { Img } from 'components/Img';

import { Dots } from './components/Dots';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const backgroundVideoIsActive = useSelector(backgroundVideoEffectSelectors.isActive);
  const backgroundVideoSrc = useSelector(backgroundVideoEffectSelectors.src);
  const backgroundImgIsActive = useSelector(backgroundImgEffectSelectors.isActive);
  const backgroundImgSrc = useSelector(backgroundImgEffectSelectors.src);
  const dotsIsActive = useSelector(effectsSelectors.dotsIsActive);

  const oneOfBgIsActive = backgroundVideoIsActive || backgroundImgIsActive;

  return (
    <div className={styles.backgroundEffectsWrapper}>
      {dotsIsActive && <Dots />}

      {oneOfBgIsActive && (
        <div className={styles.backgroundObjectsWrapper}>
          <div className={styles.backgroundObjectsShadow} />

          {backgroundVideoIsActive && (
            <Video className={styles.backgroundObjectWrapper} src={backgroundVideoSrc} autoPlay loop muted />
          )}

          {backgroundImgIsActive && (
            <Img className={styles.backgroundObjectWrapper} src={backgroundImgSrc} />
          )}
        </div>
      )}
    </div>
  );
};
