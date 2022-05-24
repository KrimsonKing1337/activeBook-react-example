import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  sideShadowIsActive: false,
  sideTextIsActive: false,
  backgroundVideoIsActive: false,
  backgroundImgIsActive: false,
  inverseColorIsActive: false,
  dotsIsActive: false,
};

const slice = createSlice({
  name: '@effects/common',
  initialState,
  reducers: {
    setSideShadowActiveState(state, action: PayloadAction<State['sideShadowIsActive']>) {
      state.sideShadowIsActive = action.payload;
    },
    setSideTextActiveState(state, action: PayloadAction<State['sideTextIsActive']>) {
      state.sideTextIsActive = action.payload;
    },
    setBackgroundVideoActiveState(state, action: PayloadAction<State['backgroundVideoIsActive']>) {
      state.backgroundVideoIsActive = action.payload;
    },
    setBackgroundImgActiveState(state, action: PayloadAction<State['backgroundImgIsActive']>) {
      state.backgroundImgIsActive = action.payload;
    },
    setInverseColorActiveState(state, action: PayloadAction<State['inverseColorIsActive']>) {
      state.inverseColorIsActive = action.payload;
    },
    setDotsActiveState(state, action: PayloadAction<State['dotsIsActive']>) {
      state.dotsIsActive = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
