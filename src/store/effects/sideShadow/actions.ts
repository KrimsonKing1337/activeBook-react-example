import { SideShadowState } from './initialState';

const nameSpace = '@effects/sideShadow';

export const actionsTypes = {
  SET_ACTIVE_STATE: `${nameSpace}/SET_ACTIVE_STATE`,
  SET_COLOR: `${nameSpace}/SET_COLOR`,
  SET_SPEED: `${nameSpace}/SET_SPEED`,
} as const;

export type SetActiveState = {
  type: typeof actionsTypes.SET_ACTIVE_STATE;
  payload: SideShadowState['isActive'];
};

export function setSideShadowActiveState(value: SetActiveState['payload']): SetActiveState {
  return {
    type: actionsTypes.SET_ACTIVE_STATE,
    payload: value,
  };
}

export type SetColor = {
  type: typeof actionsTypes.SET_COLOR,
  payload: SideShadowState['color'],
}

export function setSideShadowColor(value: SetColor['payload']): SetColor {
  return {
    type: actionsTypes.SET_COLOR,
    payload: value,
  };
}

export type SetSpeed = {
  type: typeof actionsTypes.SET_SPEED,
  payload: SideShadowState['speed'],
};

export function setSideShadowSpeed(value: SetSpeed['payload']): SetSpeed {
  return {
    type: actionsTypes.SET_SPEED,
    payload: value,
  };
}

export type SideShadowActions = SetActiveState | SetColor | SetSpeed;
