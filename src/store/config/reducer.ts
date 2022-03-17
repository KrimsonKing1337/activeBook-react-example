import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_ALL_CONFIG:
    return action.payload;
  case actionsTypes.SET_THEME:
    return {
      ...state,
      theme: action.payload,
    };
  case actionsTypes.SET_VIBRATION:
    return {
      ...state,
      vibration: action.payload,
    };
  case actionsTypes.SET_FLASHLIGHT:
    return {
      ...state,
      flashlight: action.payload,
    };
  case actionsTypes.SET_INVERSE_COLOR:
    return {
      ...state,
      inverseColor: action.payload,
    };
  case actionsTypes.SET_FONT_SIZE:
    return {
      ...state,
      fontSize: action.payload,
    };
  case actionsTypes.SET_LINE_HEIGHT:
    return {
      ...state,
      lineHeight: action.payload,
    };
  default:
    return state;
  }
}
