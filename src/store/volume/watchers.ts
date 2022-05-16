import { Howler } from 'howler';
import { call, put, takeLatest } from 'redux-saga/effects';
import { store } from 'store';

import {
  actionsTypes,
  SetAll,
  SetBg,
  setBg,
  SetGlobal,
  setGlobal,
  SetMusic,
  setMusic,
  SetRegular,
  setRegular,
} from './actions';

function getSoundInsts() {
  const storeState = store.getState();
  const { audioEffects, musicEffects } = storeState;
  const { howlInst1: audioEffectHowlInst1, howlInst2: audioEffectHowlInst2 } = audioEffects;
  const { howlInst1: musicEffectHowlInst1, howlInst2: musicEffectHowlInst2 } = musicEffects;

  const audioInst = audioEffectHowlInst1 || audioEffectHowlInst2;
  const musicInst = musicEffectHowlInst1 || musicEffectHowlInst2;

  return {
    audioInst,
    musicInst,
  };
}

export function* watchSetAll(action: SetAll) {
  const { payload } = action;
  const { global, bg, music, regular } = payload;

  yield call(() => {
    Howler.volume(global / 100);
  });

  yield put(setGlobal(global || 100));
  yield put(setRegular(regular || 100));
  yield put(setMusic(music || 100));
  yield put(setBg(bg || 100));
}

export function* watchSetGlobal(action: SetGlobal) {
  const { payload } = action;

  yield call(() => {
    // todo: video volume also need to be changed
    Howler.volume(payload / 100);
  });
}

export function* watchSetBg(action: SetBg) {
  const { payload } = action;

  yield call(() => {
    const { audioInst } = getSoundInsts();

    if (audioInst && audioInst.type === 'bg') {
      audioInst.volume(payload / 100);
    }
  });
}

export function* watchSetRegular(action: SetRegular) {
  const { payload } = action;

  yield call(() => {
    const { audioInst } = getSoundInsts();

    if (audioInst && audioInst.type === undefined) {
      audioInst.volume(payload / 100);
    }
  });
}

export function* watchSetMusic(action: SetMusic) {
  const { payload } = action;

  yield call(() => {
    const { musicInst } = getSoundInsts();

    if (musicInst) {
      musicInst.volume(payload / 100);
    }
  });
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_ALL, watchSetAll);
  yield takeLatest(actionsTypes.SET_GLOBAL, watchSetGlobal);
  yield takeLatest(actionsTypes.SET_BG, watchSetBg);
  yield takeLatest(actionsTypes.SET_REGULAR, watchSetRegular);
  yield takeLatest(actionsTypes.SET_MUSIC, watchSetMusic);
}
