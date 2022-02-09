import { RootState } from 'store';

export const volumeSelectors = {
  all: (state: RootState) => state.volume,
  common: (state: RootState) => state.volume.common,
  bg: (state: RootState) => state.volume.bg,
  other: (state: RootState) => state.volume.other,
};
