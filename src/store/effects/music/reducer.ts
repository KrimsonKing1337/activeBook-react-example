import { RootState } from 'store';

import { actionsTypes, MusicEffectsActions } from './actions';
import { initialState, MusicEffectsState } from './initialState';

export function musicEffectsReducer(state = initialState, action: MusicEffectsActions): MusicEffectsState {
  switch (action.type) {
  case actionsTypes.SET_HOWL_INST1:
    return {
      ...state,
      howlInst1: action.payload,
    };
  case actionsTypes.SET_HOWL_INST2:
    return {
      ...state,
      howlInst2: action.payload,
    };
  case actionsTypes.SET_LAST_INST_INDEX:
    return {
      ...state,
      lastInstIndex: action.payload,
    };
  default:
    return state;
  }
}

export const musicEffectsSelectors = {
  howlInst1: (state: RootState) => state.musicEffects.howlInst1,
  howlInst2: (state: RootState) => state.musicEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.musicEffects.lastInstIndex,
  musicInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.musicEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
