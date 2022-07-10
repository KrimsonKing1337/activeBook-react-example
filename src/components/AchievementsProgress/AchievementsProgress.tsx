import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { mainActions, mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { FlagsWithoutHidden,  hiddenAchievements, namesVoc, order } from 'utils/localStorage/achievements';

import { Item, ItemProps } from './Item';

import styles from './AchievementsProgress.scss';

const IS_OPEN_LOCATION = '/achievements-progress';
const IS_CLOSE_LOCATION = '/menu';

type Items = ItemProps & {
  key: string;
}

export const AchievementsProgress = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const achievements = useSelector(achievementsSelectors.achievements);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);
  const [items, setItems] = useState<Items[]>([]);

  const hiddenLength = useRef(0);

  useEffect(() => {
    if (!achievements) {
      return;
    }

    const achievementsWithoutHidden = { ...achievements };

    hiddenAchievements.forEach((cur) => {
      if (!achievements[cur]) {
        delete achievementsWithoutHidden[cur];

        hiddenLength.current = hiddenLength.current + 1;
      }
    });

    const newItemsInOrder: Record<number, Items> = {};

    Object.keys(achievementsWithoutHidden).forEach((key) => {
      const keyCur = key as FlagsWithoutHidden;
      const valueCur = achievementsWithoutHidden[keyCur];

      const index = order[keyCur];

      newItemsInOrder[index] = {
        key: keyCur,
        title: namesVoc[keyCur],
        status: valueCur,
      };
    });

    const newItems = Object.values(newItemsInOrder);

    setItems(newItems);

  }, [achievements]);

  const isOpen = menuActiveState === 'achievementsProgress';

  // todo: нажатие на кнопку назад не закрывает
  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(mainActions.setMenuActiveState(null));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  const closeButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState(null));
  };

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Прогресс достижений'} />

      <div className={styles.itemsWrapper}>
        {items.map(({ title, status, key }) => <Item key={key} title={title} status={status} />)}

        {!!hiddenLength.current && (
          <div className={styles.textAboutHidden}>
            + скрытых достижений: {hiddenLength.current} шт.
          </div>
        )}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
