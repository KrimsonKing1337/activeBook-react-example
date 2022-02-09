import { RootState } from 'store';

export const effectsSelectors = {
  sideShadowIsActive: (state: RootState) => state.effects.sideShadowIsActive,
  sideTextIsActive: (state: RootState) => state.effects.sideTextIsActive,
  backgroundVideoIsActive: (state: RootState) => state.effects.backgroundVideoIsActive,
  backgroundImgIsActive: (state: RootState) => state.effects.backgroundImgIsActive,
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,
};
