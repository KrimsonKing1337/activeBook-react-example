import { HowlWrapper } from 'utils/book/HowlWrapper';

export type HowlInst = HowlWrapper | null;
export type LastInstIndex = 1 | 2;

export interface AudioEffectsState {
  howlInst1: HowlInst,
  howlInst2: HowlInst,
  lastInstIndex: LastInstIndex,
}

export const initialState: AudioEffectsState = {
  howlInst1: null,
  howlInst2: null,
  lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};
