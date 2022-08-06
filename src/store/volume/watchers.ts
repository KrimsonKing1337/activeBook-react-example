import { PayloadAction } from '@reduxjs/toolkit';
import { Howler } from 'howler';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getAudioInstances } from 'utils/effects/audio/getAudioInstances';

import { State } from './@types';

import { actions } from './slice';

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;
  const { global, bg, music, sfx } = payload;

  yield call(() => {
    Howler.volume(global / 100);
  });

  yield put(actions.setGlobal(global || 100));
  yield put(actions.setSfx(sfx || 100));
  yield put(actions.setMusic(music || 100));
  yield put(actions.setBg(bg || 100));
}

export function* watchSetGlobal(action: PayloadAction<State['global']>) {
  const { payload } = action;

  yield call(() => {
    // todo: video volume also need to be changed
    Howler.volume(payload / 100);
  });
}

export function* watchSetBg(action: PayloadAction<State['bg']>) {
  const { payload } = action;

  yield call(() => {
    const { soundInst } = getAudioInstances();

    if (soundInst && soundInst.type === 'bg') {
      soundInst.volume(payload / 100);
    }
  });
}

export function* watchSetSfx(action: PayloadAction<State['sfx']>) {
  const { payload } = action;

  yield call(() => {
    const { soundInst } = getAudioInstances();

    if (soundInst && soundInst.type === 'sfx') {
      soundInst.volume(payload / 100);
    }
  });
}

export function* watchSetMusic(action: PayloadAction<State['music']>) {
  const { payload } = action;

  yield call(() => {
    const { musicInst } = getAudioInstances();

    if (musicInst) {
      musicInst.volume(payload / 100);
    }
  });
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setGlobal, watchSetGlobal);
  yield takeLatest(actions.setBg, watchSetBg);
  yield takeLatest(actions.setSfx, watchSetSfx);
  yield takeLatest(actions.setMusic, watchSetMusic);
}
