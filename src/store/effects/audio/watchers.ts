import { put, select, takeLatest } from 'redux-saga/effects';

import { audioEffectsSelectors } from './selectors';
import {
  actionsTypes,
  SetAudio,
  setHowlInst1,
  setHowlInst2,
  setLastInstIndex,
} from './actions';
import { LastInstIndex } from './initialState';

export function* watchSetAudio(action: SetAudio) {
  const { payload } = action;

  const lastInstIndex: LastInstIndex = yield select(audioEffectsSelectors.lastInstIndex);

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

export function* watchAudioEffectsActions() {
  yield takeLatest(actionsTypes.SET_AUDIO, watchSetAudio);
}
