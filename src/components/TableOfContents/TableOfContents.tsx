import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { mainSelectors } from 'store/main/selectors';
import { setMenuActiveState } from 'store/main/actions';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item } from './Item';
import { items } from './utils';

import styles from './TableOfContents.scss';

const IS_OPEN_LOCATION = '/table-of-contents';
const IS_CLOSE_LOCATION = '/menu';

export const TableOfContents = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);

  const isOpen = menuActiveState === 'tableOfContents';

  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(setMenuActiveState(null));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  const closeButtonClickHandler = () => {
    dispatch(setMenuActiveState(null));
  };

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Оглавление'} />

      <div className={styles.itemsWrapper}>
        {items.map((itemCur, index) => <Item key={index} {...itemCur} />)}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
