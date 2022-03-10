import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { configSelectors } from 'store/config/selectors';

import { PageWrapperProps } from 'components/PageWrapper/PageWrapper';

import styles from './Narrative.scss';

export const Narrative = ({ children }: PageWrapperProps) => {
  const fontSize = useSelector(configSelectors.fontSize);
  const lineHeight = useSelector(configSelectors.lineHeight);

  const narrativeStyle = { fontSize: `${fontSize}%` };
  const textStyle = { lineHeight: `${lineHeight * 1.5}%` };

  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
    narrativeRef.current?.focus();
  }, []);

  return (
    <div ref={narrativeRef} className={styles.narrative} style={narrativeStyle} tabIndex={0}>
      <div className={styles.text} style={textStyle}>
        { children }
      </div>
    </div>
  );
};
