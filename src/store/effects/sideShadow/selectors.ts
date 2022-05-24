import { RootState } from 'store';

export const selectors = {
  isActive: (state: RootState) => state.sideShadowEffect.isActive,
  color: (state: RootState) => state.sideShadowEffect.color,
  speed: (state: RootState) => state.sideShadowEffect.speed,
};
