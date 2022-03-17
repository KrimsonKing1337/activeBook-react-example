import { RootState } from 'store';

export const bookmarksSelectors = {
  isOpen: (state: RootState) => state.bookmarks.isOpen,
  bookmarks: (state: RootState) => state.bookmarks.bookmarks,
};
