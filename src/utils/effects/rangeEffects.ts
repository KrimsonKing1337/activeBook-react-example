import effects from 'book_pages/effects.json';
import { Range } from '@types';

export function isPageInRange(pageNumberCurrent: number, range: Range[]) {
  return range.some((rangeCur) => {
    return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
  });
}

export function getEffectInRange(pageNumberCurrent: number, type: string) {
  const arr = effects.effects as any[]; // todo

  let objInRange;

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    const isInRange = isPageInRange(pageNumberCurrent, cur.range);

    if (isInRange) {
      if (cur.type === type) {
        objInRange = cur;
      }

      break;
    }
  }

  return objInRange;
}
