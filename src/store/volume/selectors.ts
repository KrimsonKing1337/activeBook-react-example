import { RootState } from 'store';

export const selectors = {
  all: (state: RootState) => state.volume,
  global: (state: RootState) => state.volume.global,
  bg: (state: RootState) => state.volume.bg,
  regular: (state: RootState) => state.volume.regular,
  music: (state: RootState) => state.volume.music,
};
