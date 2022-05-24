import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  theme: 'dark',
  vibration: true,
  flashlight: true,
  inverseColor: true,
  fontSize: 100,
  lineHeight: 100,
};

const slice = createSlice({
  name: '@config',
  initialState,
  reducers: {
    setAll(_state, action: PayloadAction<State>) {
      return action.payload;
    },
    setTheme(state, action: PayloadAction<State['theme']>) {
      state.theme = action.payload;
    },
    setVibration(state, action: PayloadAction<State['vibration']>) {
      state.vibration = action.payload;
    },
    setFlashlight(state, action: PayloadAction<State['flashlight']>) {
      state.flashlight = action.payload;
    },
    setInverseColor(state, action: PayloadAction<State['inverseColor']>) {
      state.inverseColor = action.payload;
    },
    setFontSize(state, action: PayloadAction<State['fontSize']>) {
      state.fontSize = action.payload;
    },
    setLineHeight(state, action: PayloadAction<State['lineHeight']>) {
      state.lineHeight = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
