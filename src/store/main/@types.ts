export type MenuActiveState = null | 'menu' | 'tableOfContents';

export type AudioInstancesIsLoaded = {
  [key: string]: any;
  audio?: boolean;
  audioBg?: boolean;
  music?: boolean;
};

export interface State {
  route: string;
  page: number;
  pages: number;
  menuActiveState: MenuActiveState;
  isLoading: boolean;
  isVibrationAvailable: boolean;
  isFlashlightAvailable: boolean;
  audioInstancesIsLoaded: AudioInstancesIsLoaded;
}
