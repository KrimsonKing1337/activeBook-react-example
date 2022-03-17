import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_HOWL_INST1:
    return {
      ...state,
      howlInst1: action.payload,
    };
  case actionsTypes.SET_HOWL_INST2:
    return {
      ...state,
      howlInst2: action.payload,
    };
  case actionsTypes.SET_LAST_INST_INDEX:
    return {
      ...state,
      lastInstIndex: action.payload,
    };
  default:
    return state;
  }
}
