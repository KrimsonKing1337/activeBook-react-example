import { PayloadAction } from '@reduxjs/toolkit';
import { call, select, takeLatest } from 'redux-saga/effects';

import { setThemeCss } from 'utils/styles/setThemeCss';

import { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const config: State = yield select(selectors.all);

  const configAsJson = JSON.stringify(config);

  localStorage.setItem('config', configAsJson);
}

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;

  yield call(() => setThemeCss(payload.theme));
}

export function* watchSetTheme(action: PayloadAction<State['theme']>) {
  const { payload } = action;

  yield call(() => setThemeCss(payload));

  yield call(saveInLocalStorage);
}

export function* watchSetEtc() {
  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setTheme, watchSetTheme);
  yield takeLatest(actions.setAuthorComments, watchSetEtc);
  yield takeLatest(actions.setFlashlight, watchSetEtc);
  yield takeLatest(actions.setFontSize, watchSetEtc);
  yield takeLatest(actions.setLineHeight, watchSetEtc);
  yield takeLatest(actions.setVibration, watchSetEtc);
}
