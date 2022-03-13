import { RootState } from 'store';

export const bookmarksSelectors = {
  isActive: (state: RootState) => state.bookmarks.isActive,
  bookmarks: (state: RootState) => state.bookmarks.bookmarks,
};
