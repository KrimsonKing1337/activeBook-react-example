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
