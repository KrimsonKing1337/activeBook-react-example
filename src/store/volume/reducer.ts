import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_ALL: {
    return action.payload;
  }
  case actionsTypes.SET_GLOBAL: {
    return {
      ...state,
      global: action.payload,
    };
  }
  case actionsTypes.SET_BG: {
    return {
      ...state,
      bg: action.payload,
    };
  }
  case actionsTypes.SET_REGULAR: {
    return {
      ...state,
      regular: action.payload,
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
