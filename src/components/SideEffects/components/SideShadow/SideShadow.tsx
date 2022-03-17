import React, { useRef } from 'react';

import { useColorPolice, useResetNameOfTextShadowAnimationCss } from './hooks';

import styles from './SideShadow.scss';

export const SideShadow = () => {
  const sideShadowRef = useRef<HTMLDivElement>(null);

  useResetNameOfTextShadowAnimationCss();
  useColorPolice(sideShadowRef);

  return (
    <div ref={sideShadowRef} className={styles.sideShadow} />
  );
};
