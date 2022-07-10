import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { mainSelectors } from 'store/main';

import { actions } from './slice';

export function* watchSetIsOpen(action: PayloadAction<boolean>) {
  const { payload } = action;

  const location: Location = yield select(mainSelectors.location);

  if (!location.hash && !payload) {
    return;
  }

  const path = payload ? '#achievements-progress' : window.location.pathname;

  yield put(push(path));
}

export function* watchActions() {
  yield takeLatest(actions.setIsOpen, watchSetIsOpen);
}
