export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  route: string;
  page: number;
  pages: number;
  menuActiveState: MenuActiveState;
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
}

export const initialState: MainState = {
  route: '/',
  page: 0,
  pages: 12,
  menuActiveState: null,
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
};
