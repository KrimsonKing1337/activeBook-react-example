import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { sideShadowEffectSelectors } from 'store/effects/sideShadow/selectors';

import { setCssVariable } from 'utils/styles/setCssVariable';

import styles from './SideShadow.scss';

export const SideShadow = () => {
  const color = useSelector(sideShadowEffectSelectors.color);
  const speed = useSelector(sideShadowEffectSelectors.speed);

  const sideShadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sideShadowElement = sideShadowRef.current;

    let shadowColor = 'red';

    const changeTextShadowColor = () => {
      shadowColor = shadowColor === 'red' ? 'blue' : 'red';

      setCssVariable('--text-shadow-color', shadowColor);
    };

    if (color === 'police') {
      sideShadowElement?.addEventListener('animationiteration', changeTextShadowColor);
    }

    const animationSpeed = `${speed}ms`;

    setCssVariable('--text-shadow-color', color);
    setCssVariable('--text-shadow-animation-speed', animationSpeed);
    setCssVariable('--text-shadow-animation', 'blink');

    return () => {
      sideShadowElement?.removeEventListener('animationiteration', changeTextShadowColor);
    };
  }, [color, speed]);

  return (
    <div ref={sideShadowRef} className={styles.sideShadow} />
  );
};
