import { RootState } from 'store';

export const selectors = {
  sideShadowIsActive: (state: RootState) => state.effects.sideShadowIsActive,
  sideTextIsActive: (state: RootState) => state.effects.sideTextIsActive,
  backgroundVideoIsActive: (state: RootState) => state.effects.backgroundVideoIsActive,
  backgroundVideoSrc: (state: RootState) => state.effects.backgroundVideoSrc,
  backgroundImgIsActive: (state: RootState) => state.effects.backgroundImgIsActive,
  backgroundImgSrc: (state: RootState) => state.effects.backgroundImgSrc,
  inverseColorIsActive: (state: RootState) => state.effects.inverseColorIsActive,
  dotsIsActive: (state: RootState) => state.effects.dotsIsActive,
};
