import { actionsTypes, MainActions } from './actions';
import { initialState, MainState } from './initialState';

export function mainReducer(state = initialState, action: MainActions): MainState {
  switch (action.type) {
  case actionsTypes.SET_ROUTE:
    return {
      ...state,
      route: action.payload,
    };
  case actionsTypes.SET_PAGE:
    return {
      ...state,
      page: action.payload,
    };
  case actionsTypes.SET_MENU_ACTIVE_STATE:
    return {
      ...state,
      menuActiveState: action.payload,
    };
  case actionsTypes.SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload,
    };
  case actionsTypes.SET_IS_VIBRATION_AVAILABLE:
    return {
      ...state,
      isVibrationAvailable: action.payload,
    };
  case actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE:
    return {
      ...state,
      isFlashlightAvailable: action.payload,
    };
  default:
    return state;
  }
}
