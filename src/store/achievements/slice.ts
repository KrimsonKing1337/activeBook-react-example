import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Achievement, State } from './@types';

const initialState: State = {
  isOpen: false,
  achievements: null,
};

const slice = createSlice({
  name: '@achievements',
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<State['isOpen']>) {
      state.isOpen = action.payload;
    },
    setAchievement(state, action: PayloadAction<Achievement>) {
      const { name, value } = action.payload;

      if (state.achievements) {
        state.achievements[name] = value;
      }
    },
    setAll(state, action: PayloadAction<State['achievements']>) {
      state.achievements = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
