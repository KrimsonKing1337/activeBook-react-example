export type MenuActiveState = null | 'menu' | 'tableOfContents';

export type AudioInstancesIsLoaded = {
  audio: boolean | undefined;
  audioBg: boolean | undefined;
  music: boolean | undefined;
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
