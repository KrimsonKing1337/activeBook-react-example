import React, { useEffect, useState } from 'react';

import { Timer } from '@types';

import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/localStorage/achievements';

import styles from './Dots.scss';

const timer: Timer | null = null;

export const Dots = () => {
  const [values, setValues] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    // timer = setTimeout(() => {}, 10000);

    const valuesLength = Object.keys(values).length;

    for (let i = 0; i < valuesLength; i++) {
      const prevValue = values[i - 1];
      const value = values[i];

      if (typeof prevValue === 'undefined') {
        continue;
      }

      if (prevValue !== value) {
        return;
      }
    }

    const allIsTrue = Object.values(values).every((cur) => cur === true);

    if (allIsTrue) {
      play('Суперсекрет! Не могу поверить, что ты нашёл/нашла его!', Flags.superEasterEggFound);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [values]);

  const setValue = (index: number) => {
    const newValues = {
      ...values,
      [index]: true,
    };

    setValues(newValues);
  };

  return (
    <div className={styles.dotsWrapper}>
      <div className={styles.dot} onClick={() => setValue(1)} />
      <div className={styles.dot} onClick={() => setValue(2)} />
      <div className={styles.dot} onClick={() => setValue(4)} />
      <div className={styles.dot} onClick={() => setValue(3)} />
    </div>
  );
};

// todo: высчитывать координаты куда пользователь тыкнул. если они совпадают с координатами точек - то это будто пользователь кликнул по точке
