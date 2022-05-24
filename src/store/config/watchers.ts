import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest } from 'redux-saga/effects';

import { setThemeCss } from 'utils/styles/setThemeCss';

import { State } from './@types';
import { actions } from './slice';

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;

  yield call(() => setThemeCss(payload.theme));
}

export function* watchSetTheme(action: PayloadAction<State['theme']>) {
  const { payload } = action;

  yield call(() => setThemeCss(payload));
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setTheme, watchSetTheme);
}
