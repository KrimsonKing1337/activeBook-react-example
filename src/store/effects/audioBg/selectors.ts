import { RootState } from 'store';

export const selectors = {
  howlInst1: (state: RootState) => state.audioBgEffects.howlInst1,
  howlInst2: (state: RootState) => state.audioBgEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.audioBgEffects.lastInstIndex,
  audioInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.audioBgEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};