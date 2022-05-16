import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_ALL: {
    return action.payload;
  }
  case actionsTypes.SET_COMMON: {
    return {
      ...state,
      common: action.payload,
    };
  }
  case actionsTypes.SET_BG: {
    return {
      ...state,
      bg: action.payload,
    };
  }
  case actionsTypes.SET_OTHER: {
    return {
      ...state,
      other: action.payload,
    };
  }
  case actionsTypes.SET_MUSIC: {
    return {
      ...state,
      music: action.payload,
    };
  }
  default:
    return state;
  }
}
