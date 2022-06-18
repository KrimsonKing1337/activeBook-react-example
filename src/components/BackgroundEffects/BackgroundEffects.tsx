import React from 'react';
import { useSelector } from 'react-redux';

import { effectsSelectors } from 'store/effects/common';

import { Dots } from './components/Dots';
import { Video } from './components/Video';
import { Img } from './components/Img';

import styles from './BackgroundEffects.scss';

export const BackgroundEffects = () => {
  const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);
  const backgroundVideoSrc = useSelector(effectsSelectors.backgroundVideoSrc);
  const backgroundImgIsActive = useSelector(effectsSelectors.backgroundImgIsActive);
  const backgroundImgSrc = useSelector(effectsSelectors.backgroundImgSrc);
  const dotsIsActive = useSelector(effectsSelectors.dotsIsActive);

  const oneOfBgIsActive = backgroundVideoIsActive || backgroundImgIsActive;

  return (
    <div className={styles.backgroundEffectsWrapper}>
      {dotsIsActive && <Dots />}

      {oneOfBgIsActive && (
        <div className={styles.backgroundObjectsWrapper}>
          <div className={styles.backgroundObjectsShadow} />

          {backgroundVideoIsActive && (
            <Video className={styles.backgroundObjectWrapper} src={backgroundVideoSrc} />
          )}

          {backgroundImgIsActive && (
            <Img className={styles.backgroundObjectWrapper} src={backgroundImgSrc} />
          )}
        </div>
      )}
    </div>
  );
};
