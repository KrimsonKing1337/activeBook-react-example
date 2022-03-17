import { actionsTypes, SideShadowActions } from './actions';
import { initialState, SideShadowState } from './initialState';

export function sideShadowReducer(state = initialState, action: SideShadowActions): SideShadowState {
  switch (action.type) {
  case actionsTypes.SET_IS_OPEN:
    return {
      ...state,
      isActive: action.payload,
    };
  case actionsTypes.SET_COLOR:
    return {
      ...state,
      color: action.payload,
    };
  case actionsTypes.SET_SPEED:
    return {
      ...state,
      speed: action.payload,
    };
  default:
    return state;
  }
}
