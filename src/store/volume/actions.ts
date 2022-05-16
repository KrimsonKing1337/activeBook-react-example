import { State } from './@types';

const NAMESPACE = '@volume';

export const actionsTypes = {
  SET_ALL: `${NAMESPACE}/SET_ALL`,
  SET_COMMON: `${NAMESPACE}/SET_COMMON`,
  SET_BG: `${NAMESPACE}/SET_BG`,
  SET_OTHER: `${NAMESPACE}/SET_OTHER`,
  SET_MUSIC: `${NAMESPACE}/SET_MUSIC`,
} as const;

//#region setAll
export type SetAll = {
  type: typeof actionsTypes.SET_ALL;
  payload: State;
};

export function setAll(value: SetAll['payload']): SetAll {
  return {
    type: actionsTypes.SET_ALL,
    payload: value,
  };
}
//#endregion setAll

//#region setCommon
export type SetCommon = {
  type: typeof actionsTypes.SET_COMMON;
  payload: State['common'];
};

export function setCommon(value: SetCommon['payload']): SetCommon {
  return {
    type: actionsTypes.SET_COMMON,
    payload: value,
  };
}
//#endregion setCommon

//#region setBg
export type SetBg = {
  type: typeof actionsTypes.SET_BG;
  payload: State['bg'];
};

export function setBg(value: SetBg['payload']): SetBg {
  return {
    type: actionsTypes.SET_BG,
    payload: value,
  };
}
//#endregion setBg

//#region setOther
export type SetOther = {
  type: typeof actionsTypes.SET_OTHER;
  payload: State['other'];
};

export function setOther(value: SetOther['payload']): SetOther {
  return {
    type: actionsTypes.SET_OTHER,
    payload: value,
  };
}
//#endregion setOther

//#region setMusic
export type SetMusic = {
  type: typeof actionsTypes.SET_MUSIC;
  payload: State['music'];
};

export function setMusic(value: SetMusic['payload']): SetMusic {
  return {
    type: actionsTypes.SET_MUSIC,
    payload: value,
  };
}
//#endregion setMusic

export type Actions = SetAll | SetCommon | SetBg | SetOther | SetMusic;
