export interface BookmarksState {
  isActive: boolean;
  bookmarks: number[];
}

export const initialState: BookmarksState = {
  isActive: false,
  bookmarks: [],
};
