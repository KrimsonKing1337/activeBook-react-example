import { takeLatest } from 'redux-saga/effects';

import { setCssVariable } from 'utils/styles/setCssVariable';

import { actionsTypes, SetSpeed } from './actions';

function* watchSetSpeed(action: SetSpeed) {
  const { payload } = action;

  const animationSpeed = `${payload}ms`;

  setCssVariable('--side-scroll-text-animation-speed', animationSpeed);

  yield true;
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_SPEED, watchSetSpeed);
}
