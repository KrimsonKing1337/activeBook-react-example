import { actionsTypes, BookmarksActions } from './actions';
import { BookmarksState, initialState } from './initialState';

export function bookmarksReducer(state = initialState, action: BookmarksActions): BookmarksState {
  switch (action.type) {
  case actionsTypes.SET_ACTIVE_STATE:
    return {
      ...state,
      isActive: action.payload,
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
