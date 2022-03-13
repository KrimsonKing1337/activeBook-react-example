import { BookmarksState } from './initialState';

const nameSpace = '@effects/bookmarks';

export const actionsTypes = {
  SET_ACTIVE_STATE: `${nameSpace}/SET_ACTIVE_STATE`,
  SET_BOOKMARKS: `${nameSpace}/SET_BOOKMARKS`,
} as const;

export type SetActiveState = {
  type: typeof actionsTypes.SET_ACTIVE_STATE;
  payload: BookmarksState['isActive'];
};

export function setBookmarksActiveState(value: SetActiveState['payload']): SetActiveState {
  return {
    type: actionsTypes.SET_ACTIVE_STATE,
    payload: value,
  };
}

export type SetBookmarks = {
  type: typeof actionsTypes.SET_BOOKMARKS;
  payload: BookmarksState['bookmarks'];
};

export function setBookmarks(value: SetActiveState['payload']): SetActiveState {
  return {
    type: actionsTypes.SET_ACTIVE_STATE,
    payload: value,
  };
}

export type BookmarksActions = SetActiveState | SetBookmarks;
