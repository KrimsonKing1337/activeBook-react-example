import { MenuActiveState } from './initialState';

export const actionsTypes = {
  SET_ROUTE: '@main/SET_ROUTE',
  SET_PAGE: '@main/SET_PAGE',
  PREV_PAGE: '@main/PREV_PAGE',
  NEXT_PAGE: '@main/NEXT_PAGE',
  SET_MENU_ACTIVE_STATE: '@main/SET_MENU_ACTIVE_STATE',
  SET_IS_LOADING: '@main/SET_IS_LOADING',
  SET_IS_VIBRATION_AVAILABLE: '@main/SET_IS_VIBRATION_AVAILABLE',
  SET_IS_FLASHLIGHT_AVAILABLE: '@main/SET_IS_FLASHLIGHT_AVAILABLE',
} as const;

export type SetRouteAction = {
  type: typeof actionsTypes.SET_ROUTE;
  payload: string;
};

export function setRoute(value: SetRouteAction['payload']): SetRouteAction {
  return {
    type: actionsTypes.SET_ROUTE,
    payload: value,
  };
}

export type SetPageAction = {
  type: typeof actionsTypes.SET_PAGE;
  payload: number;
};

export function setPage(value: SetPageAction['payload']): SetPageAction {
  return {
    type: actionsTypes.SET_PAGE,
    payload: value,
  };
}

export type PrevPageAction = {
  type: typeof actionsTypes.PREV_PAGE;
};

export function prevPage(): PrevPageAction {
  return {
    type: actionsTypes.PREV_PAGE,
  };
}

export type NextPageAction = {
  type: typeof actionsTypes.NEXT_PAGE;
};

export function nextPage(): NextPageAction {
  return {
    type: actionsTypes.NEXT_PAGE,
  };
}

export type SetMenuIsOpenAction = {
  type: typeof actionsTypes.SET_MENU_ACTIVE_STATE;
  payload: MenuActiveState;
};

export function setMenuActiveState(value: SetMenuIsOpenAction['payload']): SetMenuIsOpenAction {
  return {
    type: actionsTypes.SET_MENU_ACTIVE_STATE,
    payload: value,
  };
}

export type SetIsLoadingAction = {
  type: typeof actionsTypes.SET_IS_LOADING;
  payload: boolean;
};

export function setIsLoading(value: SetIsLoadingAction['payload']): SetIsLoadingAction {
  return {
    type: actionsTypes.SET_IS_LOADING,
    payload: value,
  };
}

export type SetIsVibrationAvailableAction = {
  type: typeof actionsTypes.SET_IS_VIBRATION_AVAILABLE;
  payload: boolean;
};

export function setIsVibrationAvailable(value: SetIsVibrationAvailableAction['payload']): SetIsVibrationAvailableAction {
  return {
    type: actionsTypes.SET_IS_VIBRATION_AVAILABLE,
    payload: value,
  };
}

export type SetIsFlashlightAvailableAction = {
  type: typeof actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE;
  payload: boolean;
};

export function setIsFlashlightAvailable(value: SetIsFlashlightAvailableAction['payload']): SetIsFlashlightAvailableAction {
  return {
    type: actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE,
    payload: value,
  };
}

export type MainActions = SetRouteAction
  | SetPageAction
  | SetMenuIsOpenAction
  | SetIsLoadingAction
  | SetIsVibrationAvailableAction
  | SetIsFlashlightAvailableAction;
