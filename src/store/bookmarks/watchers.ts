import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { mainSelectors } from 'store/main/selectors';

import {
  actionsTypes,
  SetActiveState,
} from './actions';

export function* watchSetBookmarksIsOpen(action: SetActiveState) {
  const { payload } = action;

  const location: Location = yield select(mainSelectors.location);

  if (!location.hash && !payload) {
    return;
  }

  const path = payload ? '#bookmarks' : window.location.pathname;

  yield put(push(path));
}

export function* watchBookmarksActions() {
  yield takeLatest(actionsTypes.SET_ACTIVE_STATE, watchSetBookmarksIsOpen);
}
