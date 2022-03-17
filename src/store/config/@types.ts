export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export interface State {
  theme: Theme;
  vibration: boolean;
  flashlight: boolean;
  inverseColor: boolean;
  fontSize: number;
  lineHeight: number;
}
