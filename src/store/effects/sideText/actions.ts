import { State } from './@types';

const NAMESPACE = '@effects/sideText';

export const actionsTypes = {
  SET_ACTIVE_STATE: `${NAMESPACE}/SET_ACTIVE_STATE`,
  SET_TEMPLATE: `${NAMESPACE}/SET_TEMPLATE`,
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

//#region setTemplate
export type SetTemplate = {
  type: typeof actionsTypes.SET_TEMPLATE;
  payload: State['template'];
};

export function setTemplate(value: SetTemplate['payload']): SetTemplate {
  return {
    type: actionsTypes.SET_TEMPLATE,
    payload: value,
  };
}
//#endregion setTemplate

export type SetSpeed = {
  type: typeof actionsTypes.SET_SPEED;
  payload: State['speed'];
};

export function setSpeed(value: SetSpeed['payload']): SetSpeed {
  return {
    type: actionsTypes.SET_SPEED,
    payload: value,
  };
}

export type Actions = SetActiveState | SetTemplate | SetSpeed;
