import React from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main';

import { foundEasterEggs } from 'utils/localStorage/foundEasterEggs';
import { Flags } from 'utils/localStorage/achievements';
import { play } from 'utils/effects/achievements';

import styles from './EasterEgg.scss';

export type EasterEggProps = {
  [key: string]: any;
  id: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const EasterEgg = ({ id, children, onClick, ...rest }: EasterEggProps) => {
  const easterEggsLength = useSelector(mainSelectors.easterEggs);

  const easterEggOnClickHandler = () => {
    foundEasterEggs.set(id);

    const foundEasterEggsFromLocalStorage = foundEasterEggs.get();
    const foundEasterEggsLength = Object.keys(foundEasterEggsFromLocalStorage).length;

    if (foundEasterEggsLength === easterEggsLength) {
      play({
        id: Flags.allEasterEggsFound,
        text: 'Все пасхалки найдены! Невероятно!',
        type: 'gold',
      });
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <span className={styles.easterEgg} onClick={easterEggOnClickHandler} {...rest}>
      {children}
    </span>
  );
};
