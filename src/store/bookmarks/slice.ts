import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  isOpen: boolean;
  bookmarks: number[];
}

const initialState: State = {
  isOpen: false,
  bookmarks: [],
};

const slice = createSlice({
  name: '@bookmarks',
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<State['isOpen']>) {
      state.isOpen = action.payload;
    },
    setBookmarks(state, action: PayloadAction<State['bookmarks']>) {
      state.bookmarks = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
