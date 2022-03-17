import { HowlInst, LastInstIndex } from './@types';

const NAMESPACE = '@effects/music';

export const actionsTypes = {
  SET_MUSIC: `${NAMESPACE}/SET_MUSIC`,
  SET_HOWL_INST1: `${NAMESPACE}/SET_HOWL_INST1`,
  SET_HOWL_INST2: `${NAMESPACE}/SET_HOWL_INST2`,
  SET_LAST_INST_INDEX: `${NAMESPACE}/SET_LAST_INST_INDEX`,
} as const;

//#region setMusic
export type SetMusic = {
  type: typeof actionsTypes.SET_MUSIC;
  payload: HowlInst;
};

export function setMusic(value: SetMusic['payload']): SetMusic {
  return {
    type: actionsTypes.SET_MUSIC,
    payload: value,
  };
}
//#endregion setMusic

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

export type Actions = SetMusic | SetHowlInst1 | SetHowlInst2 | SetLastInstIndex;
