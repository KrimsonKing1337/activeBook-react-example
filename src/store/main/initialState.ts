import { State } from './@types';

export const initialState: State = {
  route: '/',
  page: 0,
  pages: 25,
  menuActiveState: null,
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
};
