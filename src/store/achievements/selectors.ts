import { RootState } from 'store';

export const selectors = {
  isOpen: (state: RootState) => state.achievements.isOpen,
  achievements: (state: RootState) => state.achievements.achievements,
};
