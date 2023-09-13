import { store } from 'activeBook-core/store';
import { mainActions } from 'activeBook-core/store/main';

export function goToPage(n: number) {
  store.dispatch(mainActions.setPage(n));
}

export function goPrevPage() {
  store.dispatch(mainActions.prevPage());
}

export function goNextPage() {
  store.dispatch(mainActions.nextPage());
}
