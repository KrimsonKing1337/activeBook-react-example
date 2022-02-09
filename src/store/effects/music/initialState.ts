import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

export type HowlInst = HowlWrapper | null;
export type LastInstIndex = 1 | 2;

export interface MusicEffectsState {
  howlInst1: HowlInst,
  howlInst2: HowlInst,
  lastInstIndex: LastInstIndex,
}

export const initialState: MusicEffectsState = {
  howlInst1: null,
  howlInst2: null,
  lastInstIndex: 2, // чтобы первая запись произошла в howlInst1
};