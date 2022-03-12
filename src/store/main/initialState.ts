export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface MainState {
  route: string;
  page: number;
  pages: number;
  menuActiveState: MenuActiveState;
  bookmarksIsOpen: boolean;
  bookmarks: number[];
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
}

export const initialState: MainState = {
  route: '/',
  page: 0,
  pages: 12,
  menuActiveState: null,
  bookmarksIsOpen: false,
  bookmarks: [],
  isLoading: false,
  isVibrationAvailable: false,
  isFlashlightAvailable: false,
};
