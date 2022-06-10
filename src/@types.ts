import { Howl } from 'howler';

export type Range = {
  from: number;
  to: number;
};

export type RangeEffect = {
  id: string;
  type: string;
  src: string;
  fadeOutSpeed?: number;
  range: Range[];
};

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
