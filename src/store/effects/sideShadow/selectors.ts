import { RootState } from 'store';

export const sideShadowEffectSelectors = {
  isActive: (state: RootState) => state.sideShadowEffect.isActive,
  color: (state: RootState) => state.sideShadowEffect.color,
  speed: (state: RootState) => state.sideShadowEffect.speed,
};
