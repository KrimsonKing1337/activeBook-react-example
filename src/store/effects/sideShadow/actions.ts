import { State } from './@types';

const NAMESPACE = '@effects/sideShadow';

export const actionsTypes = {
  SET_ACTIVE_STATE: `${NAMESPACE}/SET_ACTIVE_STATE`,
  SET_COLOR: `${NAMESPACE}/SET_COLOR`,
  SET_SPEED: `${NAMESPACE}/SET_SPEED`,
} as const;

//#region setActiveState
export type SetActiveState = {
  type: typeof actionsTypes.SET_ACTIVE_STATE;
  payload: State['isActive'];
};

export function setActiveState(value: SetActiveState['payload']): SetActiveState {
  return {
    type: actionsTypes.SET_ACTIVE_STATE,
    payload: value,
  };
}
//#endregion setActiveState

//#region setColor
export type SetColor = {
  type: typeof actionsTypes.SET_COLOR,
  payload: State['color'],
}

export function setColor(value: SetColor['payload']): SetColor {
  return {
    type: actionsTypes.SET_COLOR,
    payload: value,
  };
}
//#endregion setColor

//#region setSpeed
export type SetSpeed = {
  type: typeof actionsTypes.SET_SPEED,
  payload: State['speed'],
};

export function setSpeed(value: SetSpeed['payload']): SetSpeed {
  return {
    type: actionsTypes.SET_SPEED,
    payload: value,
  };
}
//#endregion setSpeed

export type Actions = SetActiveState | SetColor | SetSpeed;
