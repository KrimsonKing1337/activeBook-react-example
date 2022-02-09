import { HowlInst, LastInstIndex } from './initialState';

export const actionsTypes = {
  SET_MUSIC: '@effects/music/SET_MUSIC',
  SET_HOWL_INST1: '@effects/music/SET_HOWL_INST1',
  SET_HOWL_INST2: '@effects/music/SET_HOWL_INST2',
  SET_LAST_INST_INDEX: '@effects/music/SET_LAST_INST_INDEX',
} as const;

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

export type MusicEffectsActions = SetMusic | SetHowlInst1 | SetHowlInst2 | SetLastInstIndex;