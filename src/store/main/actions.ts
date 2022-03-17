import { MenuActiveState } from './@types';

const NAMESPACE = '@main';

export const actionsTypes = {
  SET_ROUTE: `${NAMESPACE}/SET_ROUTE`,
  SET_PAGE: `${NAMESPACE}/SET_PAGE`,
  PREV_PAGE: `${NAMESPACE}/PREV_PAGE`,
  NEXT_PAGE: `${NAMESPACE}/NEXT_PAGE`,
  SET_MENU_ACTIVE_STATE: `${NAMESPACE}/SET_MENU_ACTIVE_STATE`,
  SET_IS_LOADING: `${NAMESPACE}/SET_IS_LOADING`,
  SET_IS_VIBRATION_AVAILABLE: `${NAMESPACE}/SET_IS_VIBRATION_AVAILABLE`,
  SET_IS_FLASHLIGHT_AVAILABLE: `${NAMESPACE}/SET_IS_FLASHLIGHT_AVAILABLE`,
} as const;

//#region setRoute
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
//#endregion setRoute

//#region setPage
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
//#endregion setPage

//#region prevPage
export type PrevPageAction = {
  type: typeof actionsTypes.PREV_PAGE;
};

export function prevPage(): PrevPageAction {
  return {
    type: actionsTypes.PREV_PAGE,
  };
}
//#endregion prevPage

//#region nextPage
export type NextPageAction = {
  type: typeof actionsTypes.NEXT_PAGE;
};

export function nextPage(): NextPageAction {
  return {
    type: actionsTypes.NEXT_PAGE,
  };
}
//#endregion nextPage

//#region setMenuActiveState
export type SetMenuActiveState = {
  type: typeof actionsTypes.SET_MENU_ACTIVE_STATE;
  payload: MenuActiveState;
};

export function setMenuActiveState(value: SetMenuActiveState['payload']): SetMenuActiveState {
  return {
    type: actionsTypes.SET_MENU_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setMenuActiveState

//#region setIsLoading
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
//#endregion setIsLoading

//#region setIsVibrationAvailable
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
//#endregion setIsVibrationAvailable

//#region setIsFlashlightAvailable
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
//#endregion setIsFlashlightAvailable

export type Actions = SetRouteAction
  | SetPageAction
  | SetMenuActiveState
  | SetIsLoadingAction
  | SetIsVibrationAvailableAction
  | SetIsFlashlightAvailableAction;
