import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_ACTIVE_STATE:
    return {
      ...state,
      isActive: action.payload,
    };
  case actionsTypes.SET_TEMPLATE:
    return {
      ...state,
      template: action.payload,
    };
  case actionsTypes.SET_SPEED:
    return {
      ...state,
      speed: action.payload,
    };
  default:
    return state;
  }
}
