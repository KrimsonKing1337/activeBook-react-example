import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames';

import { mainSelectors } from 'store/main/selectors';
import { setBookmarkIsOpen, setBookmarks as setBookmarksInStore } from 'store/main/actions';

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

  const isOpen = useSelector(mainSelectors.bookmarksIsOpen);
  const page = useSelector(mainSelectors.page);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);
  const { bookmarks, setBookmarks } = useBookmarks();

  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(setBookmarkIsOpen(false));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(setBookmarksInStore(bookmarks));
  }, [bookmarks]);

  const closeButtonClickHandler = () => {
    dispatch(setBookmarkIsOpen(false));
  };

  const addButtonClickHandler = () => {
    setBookmarks([...bookmarks, page]);
  };

  const deleteHandler = (bookmark: number) => {
    const index = bookmarks.indexOf(bookmark);

    bookmarks.splice(index, 1);

    setBookmarks([...bookmarks]);
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
