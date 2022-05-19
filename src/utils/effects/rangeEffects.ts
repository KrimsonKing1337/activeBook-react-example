import { Range } from '@types';

export function isPageInRange(pageNumberCurrent: number, range: Range[]) {
  return range.some((rangeCur) => {
    return pageNumberCurrent >= rangeCur.start && pageNumberCurrent < rangeCur.stop;
  });
}
