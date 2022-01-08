export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  route: string;
  page: number;
  menuActiveState: MenuActiveState;
  bookmarksIsOpen: boolean;
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
}

export const initialState: MainState = {
  route: '/',
  page: 0,
  menuActiveState: null,
  bookmarksIsOpen: false,
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
};
