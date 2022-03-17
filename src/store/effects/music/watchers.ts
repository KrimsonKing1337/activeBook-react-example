import { put, select, takeLatest } from 'redux-saga/effects';

import { LastInstIndex } from './@types';
import { musicEffectsSelectors } from './selectors';
import {
  actionsTypes,
  setHowlInst1,
  setHowlInst2,
  setLastInstIndex,
  SetMusic,
} from './actions';

export function* watchSetMusic(action: SetMusic) {
  const { payload } = action;

  const lastInstIndex: LastInstIndex = yield select(musicEffectsSelectors.lastInstIndex);

  if (lastInstIndex === 1) {
    yield put(setHowlInst2(payload));
    yield put(setHowlInst1(null));
    yield put(setLastInstIndex(2));
  } else {
    yield put(setHowlInst1(payload));
    yield put(setHowlInst2(null));
    yield put(setLastInstIndex(1));
  }
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_MUSIC, watchSetMusic);
}
