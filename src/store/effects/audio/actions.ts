import { HowlInst, LastInstIndex } from './@types';

const NAMESPACE = '@effects/audio';

export const actionsTypes = {
  SET_AUDIO: `${NAMESPACE}/SET_AUDIO`,
  SET_HOWL_INST1: `${NAMESPACE}/SET_HOWL_INST1`,
  SET_HOWL_INST2: `${NAMESPACE}/SET_HOWL_INST2`,
  SET_LAST_INST_INDEX: `${NAMESPACE}/SET_LAST_INST_INDEX`,
} as const;

//#region setAudio
export type SetAudio = {
  type: typeof actionsTypes.SET_AUDIO;
  payload: HowlInst;
};

export function setAudio(value: SetAudio['payload']): SetAudio {
  return {
    type: actionsTypes.SET_AUDIO,
    payload: value,
  };
}
//#endregion setAudio

//#region setHowlInst1
export type SetHowlInst1 = {
  type: typeof actionsTypes.SET_HOWL_INST1;
  payload: HowlInst;
};

export function setHowlInst1(value: SetHowlInst1['payload']): SetHowlInst1 {
  return {
    type: actionsTypes.SET_HOWL_INST1,
    payload: value,
  };
}
//#endregion setHowlInst1

//#region setHowlInst2
export type SetHowlInst2 = {
  type: typeof actionsTypes.SET_HOWL_INST2;
  payload: HowlInst;
};

export function setHowlInst2(value: SetHowlInst2['payload']): SetHowlInst2 {
  return {
    type: actionsTypes.SET_HOWL_INST2,
    payload: value,
  };
}
//#endregion setHowlInst2

//#region setLastInstIndex
export type SetLastInstIndex = {
  type: typeof actionsTypes.SET_LAST_INST_INDEX;
  payload: LastInstIndex;
}

export function setLastInstIndex(value: SetLastInstIndex['payload']): SetLastInstIndex {
  return {
    type: actionsTypes.SET_LAST_INST_INDEX,
    payload: value,
  };
}
//#endregion setLastInstIndex

export type Actions = SetAudio | SetHowlInst1 | SetHowlInst2 | SetLastInstIndex;
