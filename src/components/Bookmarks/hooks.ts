import { useEffect } from 'react';

import { useDispatch, useSelector } from 'activeBook-core/store';
import { selectors } from 'activeBook-core/store/bookmarks/selectors';
import { bookmarksActions } from 'activeBook-core/store/bookmarks';

export function useBookmarks() {
  const dispatch = useDispatch();

  const bookmarks = useSelector(selectors.bookmarks);

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
