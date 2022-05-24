import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst } from 'store/effects/music/@types';
import { musicEffectsSelectors } from 'store/effects/music';

import { State } from './@types';
import { mainSelectors } from './selectors';
import {
  actionsTypes,
  SetMenuActiveState,
  setPage,
  SetPageAction,
  SetRouteAction,
} from './actions';

export function* watchSetMenuActiveState(action: SetMenuActiveState) {
  const { payload } = action;

  const location: Location = yield select(mainSelectors.location);

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

export function* watchSetRoute(action: SetRouteAction) {
  const { payload } = action;

  yield put(push(payload));
}

export function* watchSetPage(action: SetPageAction) {
  const { payload } = action;

  const path = `/page-${payload}`;

  const page: State['page'] = yield select(mainSelectors.page);
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

  yield put(push(path));
}

export function* watchPrevPage() {
  const page: State['page'] = yield select(mainSelectors.page);

  if (page === 0) {
    return;
  }

  const newPageNumber = page - 1;

  if (newPageNumber < 1) {
    return;
  }

  yield put(setPage(newPageNumber));
}

export function* watchNextPage() {
  const page: State['page'] = yield select(mainSelectors.page);
  const pages: State['pages'] = yield select(mainSelectors.pages);

  if (page === 0) {
    return;
  }

  const newPageNumber = page + 1;

  if (newPageNumber > pages) {
    return;
  }

  yield put(setPage(newPageNumber));
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_MENU_ACTIVE_STATE, watchSetMenuActiveState);
  yield takeLatest(actionsTypes.SET_ROUTE, watchSetRoute);
  yield takeLatest(actionsTypes.SET_PAGE, watchSetPage);
  yield takeLatest(actionsTypes.PREV_PAGE, watchPrevPage);
  yield takeLatest(actionsTypes.NEXT_PAGE, watchNextPage);
}
