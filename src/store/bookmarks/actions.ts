import type { State } from './@types';

const NAMESPACE = '@bookmarks';

export const actionsTypes = {
  SET_IS_OPEN: `${NAMESPACE}/SET_IS_OPEN`,
  SET_BOOKMARKS: `${NAMESPACE}/SET_BOOKMARKS`,
} as const;

export type SetIsOpen = {
  type: typeof actionsTypes.SET_IS_OPEN;
  payload: State['isOpen'];
};

export function setIsOpen(value: SetIsOpen['payload']): SetIsOpen {
  return {
    type: actionsTypes.SET_IS_OPEN,
    payload: value,
  };
}

export type SetBookmarks = {
  type: typeof actionsTypes.SET_BOOKMARKS;
  payload: State['bookmarks'];
};

export function setBookmarks(value: SetBookmarks['payload']): SetBookmarks {
  return {
    type: actionsTypes.SET_BOOKMARKS,
    payload: value,
  };
}

export type Actions = SetIsOpen | SetBookmarks;
