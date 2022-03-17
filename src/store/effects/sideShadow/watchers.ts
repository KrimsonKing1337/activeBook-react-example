import { takeLatest } from 'redux-saga/effects';

import { setCssVariable } from 'utils/styles/setCssVariable';

import { actionsTypes, SetColor, SetSpeed } from './actions';

function* watchSetColor(action: SetColor) {
  const { payload } = action;

  setCssVariable('--text-shadow-color', payload);

  yield true;
}

function* watchSetSpeed(action: SetSpeed) {
  const { payload } = action;

  const animationSpeed = `${payload}ms`;

  setCssVariable('--text-shadow-animation-speed', animationSpeed);

  yield true;
}

export function* watchActions() {
  yield takeLatest(actionsTypes.SET_COLOR, watchSetColor);
  yield takeLatest(actionsTypes.SET_SPEED, watchSetSpeed);
}
