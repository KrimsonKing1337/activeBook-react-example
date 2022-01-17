import { RootState } from 'store';

import { actionsTypes, AudioEffectsActions } from './actions';
import { AudioEffectsState, initialState } from './initialState';

export function audioEffectsReducer(state = initialState, action: AudioEffectsActions): AudioEffectsState {
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

export const audioEffectsSelectors = {
  howlInst1: (state: RootState) => state.audioEffects.howlInst1,
  howlInst2: (state: RootState) => state.audioEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.audioEffects.lastInstIndex,
  audioInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.audioEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
