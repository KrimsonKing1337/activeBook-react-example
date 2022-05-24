import { RootState } from 'store';

export const selectors = {
  howlInst1: (state: RootState) => state.audioEffects.howlInst1,
  howlInst2: (state: RootState) => state.audioEffects.howlInst2,
  lastInstIndex: (state: RootState) => state.audioEffects.lastInstIndex,
  audioInst: (state: RootState) => {
    const { howlInst1, howlInst2, lastInstIndex } = state.audioEffects;

    if (lastInstIndex === 1) {
      return howlInst1;
    }

    if (lastInstIndex === 2) {
      return howlInst2;
    }

    return null;
  },
};
