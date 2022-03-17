import { State } from './@types';

const NAMESPACE = '@config';

export const actionsTypes = {
  SET_ALL_CONFIG: `${NAMESPACE}/SET_ALL_CONFIG`,
  SET_THEME: `${NAMESPACE}/SET_THEME`,
  SET_VIBRATION: `${NAMESPACE}/SET_VIBRATION`,
  SET_FLASHLIGHT: `${NAMESPACE}/SET_FLASHLIGHT`,
  SET_INVERSE_COLOR: `${NAMESPACE}/SET_INVERSE_COLOR`,
  SET_FONT_SIZE: `${NAMESPACE}/SET_FONT_SIZE`,
  SET_LINE_HEIGHT: `${NAMESPACE}/SET_LINE_HEIGHT`,
} as const;

export type SetAll = {
  type: typeof actionsTypes.SET_ALL_CONFIG;
  payload: State;
};

export function setAll(value: SetAll['payload']): SetAll {
  return {
    type: actionsTypes.SET_ALL_CONFIG,
    payload: value,
  };
}

export type SetTheme = {
  type: typeof actionsTypes.SET_THEME;
  payload: State['theme'];
}

export function setTheme(value: SetTheme['payload']): SetTheme {
  return {
    type: actionsTypes.SET_THEME,
    payload: value,
  };
}

export type SetVibration = {
  type: typeof actionsTypes.SET_VIBRATION;
  payload: State['vibration'];
}

export function setVibration(value: SetVibration['payload']): SetVibration {
  return {
    type: actionsTypes.SET_VIBRATION,
    payload: value,
  };
}

export type SetFlashlight = {
  type: typeof actionsTypes.SET_FLASHLIGHT;
  payload: State['flashlight'];
}

export function setFlashlight(value: SetFlashlight['payload']): SetFlashlight {
  return {
    type: actionsTypes.SET_FLASHLIGHT,
    payload: value,
  };
}

export type SetInverseColor = {
  type: typeof actionsTypes.SET_INVERSE_COLOR;
  payload: State['inverseColor'];
}

export function setInverseColor(value: SetInverseColor['payload']): SetInverseColor {
  return {
    type: actionsTypes.SET_INVERSE_COLOR,
    payload: value,
  };
}

export type SetFontSize = {
  type: typeof actionsTypes.SET_FONT_SIZE;
  payload: State['fontSize'];
}

export function setFontSize(value: SetFontSize['payload']): SetFontSize {
  return {
    type: actionsTypes.SET_FONT_SIZE,
    payload: value,
  };
}

export type SetLineHeight = {
  type: typeof actionsTypes.SET_LINE_HEIGHT;
  payload: State['lineHeight'];
}

export function setLineHeight(value: SetLineHeight['payload']): SetLineHeight {
  return {
    type: actionsTypes.SET_LINE_HEIGHT,
    payload: value,
  };
}

export type Actions = SetAll
  | SetTheme
  | SetVibration
  | SetFlashlight
  | SetInverseColor
  | SetFontSize
  | SetLineHeight;
