import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst } from 'store/effects/music/@types';
import { musicEffectsSelectors } from 'store/effects/music';

import { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetMenuActiveState(action: PayloadAction<State['menuActiveState']>) {
  const { payload } = action;

  const location: Location = yield select(selectors.location);

  if (!location.hash && payload === null) {
    return;
  }

  let path = window.location.pathname;

  if (payload === 'tableOfContents') {
    path = '#table-of-contents';
  } else if (payload === 'menu') {
    path = '#menu';
  }

  yield put(push(path as string));
}

export function* watchSetRoute(action: PayloadAction<State['route']>) {
  const { payload } = action;

  yield put(push(payload));
}

export function* watchSetPage(action: PayloadAction<State['page']>) {
  const { payload } = action;

  const path = `/page-${payload}`;

  const page: State['page'] = yield select(selectors.page);
  const musicInst: HowlInst = yield select(musicEffectsSelectors.musicInst);

  /**
   * убиваем инстанс музыки, если мы вне диапазона его воспроизведения
   * */
  if (musicInst && !musicInst.isUnloading) {
    const { range } = musicInst;

    if (range) {
      const { from, to } = range;

      if (page < from || page > to) {
        musicInst.unload();
      }
    }
  }

  yield put(actions.setIsLoading(true));

  yield put(push(path));
}

export function* watchPrevPage() {
  const page: State['page'] = yield select(selectors.page);

  if (page === 0) {
    return;
  }

  const newPageNumber = page - 1;

  if (newPageNumber < 1) {
    return;
  }

  yield put(actions.setPage(newPageNumber));
}

export function* watchNextPage() {
  const page: State['page'] = yield select(selectors.page);
  const pages: State['pages'] = yield select(selectors.pages);

  if (page === 0) {
    return;
  }

  const newPageNumber = page + 1;

  if (newPageNumber > pages) {
    return;
  }

  yield put(actions.setPage(newPageNumber));
}

export function* watchAudioInstancesIsLoaded() {
  const audioInstancesIsLoaded: State['audioInstancesIsLoaded'] = yield select(selectors.audioInstancesIsLoaded);

  const isAllLoaded = Object.values(audioInstancesIsLoaded).every(cur => cur !== false);

  if (isAllLoaded) {
    yield put(actions.setIsLoading(false));
  }
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setRoute, watchSetRoute);
  yield takeLatest(actions.setPage, watchSetPage);
  yield takeLatest(actions.prevPage, watchPrevPage);
  yield takeLatest(actions.nextPage, watchNextPage);
  yield takeLatest(actions.setAudioInstancesIsLoaded, watchAudioInstancesIsLoaded);
}
