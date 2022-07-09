import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { mainActions, mainSelectors } from 'store/main';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { namesVoc } from 'utils/localStorage/achievements';

import { Item, ItemProps } from './Item';

import styles from './AchievementsProgress.scss';

const IS_OPEN_LOCATION = '/achievements-progress';
const IS_CLOSE_LOCATION = '/menu';

const mocks = Object.values(namesVoc).map((valueCur) => {
  return {
    title: valueCur,
    status: true,
  };
});

export const AchievementsProgress = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    setItems(mocks); // todo
  }, []);

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
        {items.map(({ title, status }, index) => <Item key={index} title={title} status={status} />)}

        {/* todo */}
        <div style={{ marginTop: '30px' }}>
          + ещё два скрытых достижения
        </div>
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
