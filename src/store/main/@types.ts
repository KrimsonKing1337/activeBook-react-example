export type MenuActiveState = null | 'menu' | 'tableOfContents';

export interface State {
  route: string;
  page: number;
  pages: number;
  easterEggs: number;
  achievements: number;
  achievementToastBgColor: string;
  menuActiveState: MenuActiveState;
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
}
