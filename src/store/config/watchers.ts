import { call, takeLatest } from 'redux-saga/effects';

import { setThemeCss } from 'utils/styles/setThemeCss';

import { actionsTypes, SetAll, SetTheme } from './actions';

export function* watchSetAll(action: SetAll) {
  const { payload } = action;

  yield call(() => setThemeCss(payload.theme));
}

export function* watchSetTheme(action: SetTheme) {
  const { payload } = action;

  yield call(() => setThemeCss(payload));
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_ALL_CONFIG, watchSetAll);
  yield takeLatest(actionsTypes.SET_THEME, watchSetTheme);
}
