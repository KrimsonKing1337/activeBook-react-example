import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Hammer from 'hammerjs';

import { configSelectors } from 'store/config';

import { PageWrapperProps } from 'components/PageWrapper/PageWrapper';

import { goNextPage, goPrevPage } from 'utils/control/goToPage';

import styles from './Narrative.scss';

export const Narrative = ({ children }: PropsWithChildren<PageWrapperProps>) => {
  const fontSize = useSelector(configSelectors.fontSize);
  const lineHeight = useSelector(configSelectors.lineHeight);

  const narrativeStyle = { fontSize: `${fontSize}%` };
  const textStyle = { lineHeight: `${lineHeight}%` };

  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
    narrativeRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!narrativeRef.current) {
      return;
    }

    const hammertime = new Hammer(narrativeRef.current, { domEvents: true });

    hammertime.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 50,
    });

    hammertime.on('swipe', (e) => {
      const { direction } = e;

      const isNext = direction === Hammer.DIRECTION_LEFT;

      isNext ? goNextPage() : goPrevPage();
    });

    return () => {
      hammertime.off('swipe');
      hammertime.destroy();
    };
  }, []);

  return (
    <div
      ref={narrativeRef}
      className={styles.narrative}
      style={narrativeStyle}
      tabIndex={0}
    >
      <div className={styles.text} style={textStyle}>
        { children }
      </div>
    </div>
  );
};
