import { Howler } from 'howler';
import { call, takeLatest } from 'redux-saga/effects';
import { store } from 'store';

import { actionsTypes, SetAll, SetBg, SetCommon, SetOther } from './actions';

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
  const { common } = payload;

  yield call(() => {
    Howler.volume(common / 100);
  });
}

export function* watchSetCommon(action: SetCommon) {
  const { payload } = action;

  yield call(() => {
    // todo: video volume also need to be changed
    Howler.volume(payload / 100);
  });
}

export function* watchSetBg(action: SetBg) {
  const { payload } = action;

  yield call(() => {
    const { audioInst, musicInst } = getSoundInsts();

    if (audioInst && audioInst.type === 'loop') {
      audioInst.volume(payload / 100);
    }

    if (musicInst) {
      musicInst.volume(payload / 100);
    }
  });
}

export function* watchSetOther(action: SetOther) {
  const { payload } = action;

  yield call(() => {
    const { audioInst } = getSoundInsts();

    if (audioInst && audioInst.type !== 'loop') {
      audioInst.volume(payload / 100);
    }
  });
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_ALL, watchSetAll);
  yield takeLatest(actionsTypes.SET_COMMON, watchSetCommon);
  yield takeLatest(actionsTypes.SET_BG, watchSetBg);
  yield takeLatest(actionsTypes.SET_OTHER, watchSetOther);
}
