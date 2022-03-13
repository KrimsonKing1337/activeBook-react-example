import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { HowlInst } from 'store/effects/music/initialState';
import { musicEffectsSelectors } from 'store/effects/music/selectors';

import { mainSelectors } from './selectors';
import { MainState } from './initialState';
import {
  actionsTypes,
  SetMenuIsOpenAction,
  setPage,
  SetPageAction,
  SetRouteAction,
} from './actions';

export function* watchSetMenuActiveState(action: SetMenuIsOpenAction) {
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

  const page: MainState['page'] = yield select(mainSelectors.page);
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
  const page: MainState['page'] = yield select(mainSelectors.page);

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
  const page: MainState['page'] = yield select(mainSelectors.page);
  const pages: MainState['pages'] = yield select(mainSelectors.pages);

  if (page === 0) {
    return;
  }

  const newPageNumber = page + 1;

  if (newPageNumber > pages) {
    return;
  }

  yield put(setPage(newPageNumber));
}

export function* watchMainActions() {
  yield takeLatest(actionsTypes.SET_MENU_ACTIVE_STATE, watchSetMenuActiveState);
  yield takeLatest(actionsTypes.SET_ROUTE, watchSetRoute);
  yield takeLatest(actionsTypes.SET_PAGE, watchSetPage);
  yield takeLatest(actionsTypes.PREV_PAGE, watchPrevPage);
  yield takeLatest(actionsTypes.NEXT_PAGE, watchNextPage);
}
