import { push } from 'connected-react-router';
import { Location } from 'history';
import { put, select, takeLatest } from 'redux-saga/effects';

import { mainSelectors } from 'store/main/selectors';

import { actionsTypes, SetIsOpen } from './actions';

export function* watchSetIsOpen(action: SetIsOpen) {
  const { payload } = action;

  const location: Location = yield select(mainSelectors.location);

  if (!location.hash && !payload) {
    return;
  }

  const path = payload ? '#bookmarks' : window.location.pathname;

  yield put(push(path));
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_IS_OPEN, watchSetIsOpen);
}
