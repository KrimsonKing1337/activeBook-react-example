import { State } from './@types';

const NAMESPACE = '@volume';

export const actionsTypes = {
  SET_ALL: `${NAMESPACE}/SET_ALL`,
  SET_GLOBAL: `${NAMESPACE}/SET_GLOBAL`,
  SET_MUSIC: `${NAMESPACE}/SET_MUSIC`,
  SET_REGULAR: `${NAMESPACE}/SET_REGULAR`,
  SET_BG: `${NAMESPACE}/SET_BG`,
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

//#region setGlobal
export type SetGlobal = {
  type: typeof actionsTypes.SET_GLOBAL;
  payload: State['global'];
};

export function setGlobal(value: SetGlobal['payload']): SetGlobal {
  return {
    type: actionsTypes.SET_GLOBAL,
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

//#region setRegular
export type SetRegular = {
  type: typeof actionsTypes.SET_REGULAR;
  payload: State['regular'];
};

export function setRegular(value: SetRegular['payload']): SetRegular {
  return {
    type: actionsTypes.SET_REGULAR,
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

export type Actions = SetAll | SetGlobal | SetBg | SetRegular | SetMusic;
