import { store } from 'store';

import { nextPage, prevPage, setPage } from 'store/main/actions';

export function goToPage(n: number) {
  store.dispatch(setPage(n));
}

export function goPrevPage() {
  store.dispatch(prevPage());
}

export function goNextPage() {
  store.dispatch(nextPage());
}
