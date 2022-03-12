import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/selectors';

export function useBookmarks() {
  const bookmarksFromStore = useSelector(mainSelectors.bookmarks);

  const [bookmarks, setBookmarks] = useState<number[]>(bookmarksFromStore);

  useEffect(() => {
    if (bookmarks.length > 0) {
      return;
    }

    const bookmarksAsJSON = localStorage.getItem('bookmarks');

    if (bookmarksAsJSON) {
      const bookmarksAsArray: number[] = JSON.parse(bookmarksAsJSON);

      setBookmarks(bookmarksAsArray);
    }
  }, []);

  return { bookmarks, setBookmarks };
}
