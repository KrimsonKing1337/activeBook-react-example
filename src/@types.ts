import { Howl } from 'howler';

export type Range = {
  from: number;
  to: number;
};

export type RangeEffect = {
  type: string;
  range: Range[];
};

export type AudioRangeEffect = RangeEffect & {
  id: string;
  src: string;
  fadeOutSpeed?: number;
};

export type DotsRangeEffect = RangeEffect;

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
