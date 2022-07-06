import React, { useEffect, useState } from 'react';

import { play } from 'utils/effects/achievements';
import { achievements, Flags } from 'utils/localStorage/achievements';

import { getPlaceInLineByLocationStyles, valuesDefaultState } from './utils';

import styles from './Dots.scss';

export const Dots = () => {
  const [values, setValues] = useState<Record<number, number>>(valuesDefaultState);

  useEffect(() => {
    const wasFound = achievements.get(Flags.superEasterEggFound);

    if (wasFound) {
      return;
    }

    const setValue = (index: number) => {
      const placeInLine = Object.values(values).indexOf(0);
      const keyStr = Object.keys(values)[placeInLine];
      const key = parseInt(keyStr, 10);

      const newValues = {
        ...values,
        [key]: index,
      };

      setValues(newValues);
    };

    const listener = (e: MouseEvent) => {
      const elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);

      if (!elementsUnderCursor) {
        return;
      }

      // todo: remove any
      const dotElement: any = elementsUnderCursor.find((elementCur) => {
        if (elementCur.parentElement) {
          const str = elementCur.parentElement.classList.value;

          if (str.includes('dotsWrapper')) {
            return elementCur;
          }
        }

        return false;
      });

      if (!dotElement) {
        return;
      }

      const computedStyles = window.getComputedStyle(dotElement);

      const styles = {
        top: computedStyles.top,
        right: computedStyles.right,
        bottom: computedStyles.bottom,
        left: computedStyles.left,
      };

      const placeInLine = getPlaceInLineByLocationStyles(styles);

      console.log('___ placeInLine', placeInLine);

      setValue(placeInLine);
    };

    document.addEventListener('click', listener, { passive: true });

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [values, setValues]);

  useEffect(() => {
    const valuesInLine = Object.values(values);

    const allClicked = valuesInLine.indexOf(0) === -1;

    if (!allClicked) {
      return;
    }

    const keysInLine = Object.keys(values);

    for (let i = 0; i < keysInLine.length; i++) {
      const keyCur = keysInLine[i];
      const valueCur = valuesInLine[i].toString();

      if (keyCur !== valueCur) {
        setValues(valuesDefaultState);

        return;
      }
    }

    play('Суперсекрет! Не могу поверить, что ты это нашёл/нашла!', Flags.superEasterEggFound);

    return () => {
      setValues(valuesDefaultState);
    };
  }, [values]);

  return (
    <div className={styles.dotsWrapper}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
