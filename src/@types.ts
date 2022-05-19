export type Range = {
  start: number;
  stop: number;
};

export type RangeEffect = {
  id: string;
  type: string;
  src: string;
  fadeOutSpeed?: number;
  range: Range[];
};
