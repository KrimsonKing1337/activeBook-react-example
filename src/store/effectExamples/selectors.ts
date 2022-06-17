import { RootState } from 'store';

export const selectors = {
  sideShadowIsActive: (state: RootState) => state.effectExamples.sideShadowIsActive,
  sideTextIsActive: (state: RootState) => state.effectExamples.sideTextIsActive,
  backgroundVideoIsActive: (state: RootState) => state.effectExamples.backgroundVideoIsActive,
  backgroundImgIsActive: (state: RootState) => state.effectExamples.backgroundImgIsActive,
  inverseColorIsActive: (state: RootState) => state.effectExamples.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effectExamples.dotsIsActive,
};
