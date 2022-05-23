import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bookmarksSelectors } from 'store/bookmarks/selectors';
import { bookmarksActions } from 'store/bookmarks';

export function useBookmarks() {
  const dispatch = useDispatch();

  const bookmarks = useSelector(bookmarksSelectors.bookmarks);

  const setBookmarks = (bookmarks: number[]) => {
    dispatch(bookmarksActions.setBookmarks(bookmarks));
  };

  useEffect(() => {
    if (bookmarks.length > 0) {
      return;
    }

    const bookmarksAsJSON = localStorage.getItem('bookmarks');

    if (bookmarksAsJSON) {
      const bookmarksAsArray: number[] = JSON.parse(bookmarksAsJSON);

      dispatch(bookmarksActions.setBookmarks(bookmarksAsArray));
    }
  }, []);

  return { bookmarks, setBookmarks };
}
