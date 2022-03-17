import { State } from './@types';

const NAMESPACE = '@effects/common';

export const actionsTypes = {
  SET_SIDE_SHADOW_ACTIVE_STATE: `${NAMESPACE}/SET_SIDE_SHADOW_ACTIVE_STATE`,
  SET_SIDE_TEXT_ACTIVE_STATE: `${NAMESPACE}/SET_SIDE_TEXT_ACTIVE_STATE`,
  SET_BACKGROUND_VIDEO_ACTIVE_STATE: `${NAMESPACE}/SET_BACKGROUND_VIDEO_ACTIVE_STATE`,
  SET_BACKGROUND_IMG_ACTIVE_STATE: `${NAMESPACE}/SET_BACKGROUND_IMG_ACTIVE_STATE`,
  SET_INVERSE_COLOR_ACTIVE_STATE: `${NAMESPACE}/SET_INVERSE_COLOR_ACTIVE_STATE`,
  SET_DOTS_ACTIVE_STATE: `${NAMESPACE}/SET_DOTS_ACTIVE_STATE`,
} as const;

//#region setSideShadowActiveState
export type SetSideShadowActiveState = {
  type: typeof actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE;
  payload: State['sideShadowIsActive'];
};

export function setSideShadowActiveState(value: SetSideShadowActiveState['payload']): SetSideShadowActiveState {
  return {
    type: actionsTypes.SET_SIDE_SHADOW_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setSideShadowActiveState

//#region setSideTextActiveState
export type SetSideTextActiveState = {
  type: typeof actionsTypes.SET_SIDE_TEXT_ACTIVE_STATE;
  payload: State['sideTextIsActive'];
};

export function setSideTextActiveState(value: SetSideTextActiveState['payload']): SetSideTextActiveState {
  return {
    type: actionsTypes.SET_SIDE_TEXT_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setSideTextActiveState

//#region setBackgroundVideoActiveState
export type SetBackgroundVideoActiveState = {
  type: typeof actionsTypes.SET_BACKGROUND_VIDEO_ACTIVE_STATE;
  payload: State['backgroundVideoIsActive'];
};

export function setBackgroundVideoActiveState(value: SetBackgroundVideoActiveState['payload']): SetBackgroundVideoActiveState {
  return {
    type: actionsTypes.SET_BACKGROUND_VIDEO_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setBackgroundVideoActiveState

//#region setBackgroundImgActiveState
export type SetBackgroundImgActiveState = {
  type: typeof actionsTypes.SET_BACKGROUND_IMG_ACTIVE_STATE;
  payload: State['backgroundImgIsActive'];
};

export function setBackgroundImgActiveState(value: SetBackgroundVideoActiveState['payload']): SetBackgroundImgActiveState {
  return {
    type: actionsTypes.SET_BACKGROUND_IMG_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setBackgroundImgActiveState

//#region setInverseColorActiveState
export type SetInverseColorActiveState = {
  type: typeof actionsTypes.SET_INVERSE_COLOR_ACTIVE_STATE;
  payload: State['inverseColorIsActive'];
};

export function setInverseColorActiveState(value: SetInverseColorActiveState['payload']): SetInverseColorActiveState {
  return {
    type: actionsTypes.SET_INVERSE_COLOR_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setInverseColorActiveState

//#region setDotsActiveState
export type SetDotsActiveState = {
  type: typeof actionsTypes.SET_DOTS_ACTIVE_STATE;
  payload: State['dotsIsActive'];
};

export function setDotsActiveState(value: SetDotsActiveState['payload']): SetDotsActiveState {
  return {
    type: actionsTypes.SET_DOTS_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setDotsActiveState

export type Actions = SetSideShadowActiveState
  | SetSideTextActiveState
  | SetBackgroundVideoActiveState
  | SetBackgroundImgActiveState
  | SetInverseColorActiveState
  | SetDotsActiveState;
