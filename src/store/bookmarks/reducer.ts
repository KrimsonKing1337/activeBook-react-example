import { State } from './@types';
import { Actions, actionsTypes } from './actions';
import { initialState } from './initialState';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
  case actionsTypes.SET_IS_OPEN:
    return {
      ...state,
      isOpen: action.payload,
    };
  case actionsTypes.SET_BOOKMARKS:
    return {
      ...state,
      bookmarks: action.payload,
    };
  default:
    return state;
  }
}
