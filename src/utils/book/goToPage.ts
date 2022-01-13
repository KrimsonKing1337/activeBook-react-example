import { store } from 'store';

import { nextPage, prevPage, setPage } from 'store/main/actions';

export function goToPage(n: number) {
  let pageNumber = n;

  if (n < 1) {
    pageNumber = 1;
  }

  store.dispatch(setPage(pageNumber));
}

export function goPrevPage() {
  store.dispatch(prevPage());
}

export function goNextPage() {
  store.dispatch(nextPage());
}
