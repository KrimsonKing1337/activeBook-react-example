import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames';

import { mainSelectors } from 'store/main';
import { bookmarksActions } from 'store/bookmarks';
import { bookmarksSelectors } from 'store/bookmarks';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item } from './Item';
import { useBookmarks } from './hooks';

import styles from './Bookmarks.scss';

const IS_OPEN_LOCATION = '/bookmarks';
const IS_CLOSE_LOCATION = '/';

const buttonAddClassNames = classNames([styles.button, styles.isAdd]);

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isOpen = useSelector(bookmarksSelectors.isOpen);
  const page = useSelector(mainSelectors.page);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);
  const { bookmarks, setBookmarks } = useBookmarks();

  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(bookmarksActions.setIsOpen(false));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  const closeButtonClickHandler = () => {
    dispatch(bookmarksActions.setIsOpen(false));
  };

  const addButtonClickHandler = () => {
    setBookmarks([...bookmarks, page]);
  };

  const deleteHandler = (bookmark: number) => {
    const newBookmarks = [...bookmarks];

    const index = newBookmarks.indexOf(bookmark);

    newBookmarks.splice(index, 1);

    setBookmarks(newBookmarks);
  };

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Закладки'} />

      <div className={styles.itemsWrapper}>
        {bookmarks.map((itemCur, index) => <Item key={index} pageNumber={itemCur} onDelete={deleteHandler} />)}
      </div>

      <div className={styles.footer}>
        <button className={buttonAddClassNames} onClick={addButtonClickHandler}>
          Добавить
        </button>

        <button className={styles.button} onClick={closeButtonClickHandler}>
          Закрыть
        </button>
      </div>
    </Overflow>
  );
};
