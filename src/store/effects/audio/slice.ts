import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

export type HowlInst = HowlWrapper | null;
export type LastInstIndex = 1 | 2;

export interface State {
  howlInst1: HowlInst,
  howlInst2: HowlInst,
  lastInstIndex: LastInstIndex,
}

export const initialState: State = {
  howlInst1: null,
  howlInst2: null,
  lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};

const slice = createSlice({
  name: '@effects/audio',
  initialState,
  reducers: {
    setAudio(_state, _action: PayloadAction<HowlInst>) {},
    setHowlInst1(state, action: PayloadAction<HowlInst>) {
      state.howlInst1 = action.payload;
    },
    setHowlInst2(state, action: PayloadAction<HowlInst>) {
      state.howlInst2 = action.payload;
    },
    setLastInstIndex(state, action: PayloadAction<LastInstIndex>) {
      state.lastInstIndex = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
