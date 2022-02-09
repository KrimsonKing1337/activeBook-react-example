import { RootState } from 'store';

export const mainSelectors = {
  // не придумал куда лучше впихнуть, а отдельную сущность под один селектор не захотел создавать
  location: (state: RootState) => state.router.location,
  page: (state: RootState) => state.main.page,
  route: (state: RootState) => state.main.route,
  menuActiveState: (state: RootState) => state.main.menuActiveState,
  bookmarksIsOpen: (state: RootState) => state.main.bookmarksIsOpen,
  isLoading: (state: RootState) => state.main.isLoading,
  isVibrationAvailable: (state: RootState) => state.main.isVibrationAvailable,
  isFlashlightAvailable: (state: RootState) => state.main.isFlashlightAvailable,
};
