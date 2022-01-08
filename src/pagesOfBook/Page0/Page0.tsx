import React from 'react';

import { store } from 'store';

import { setPage } from 'store/main/actions';

import { PageWrapper } from 'components/PageWrapper';

// todo: создать заглавную страницу
export const Page0 = () => {
  function clickHandler() {
    store.dispatch(setPage(1));
  }

  return (
    <PageWrapper withoutToolbar>
      <p>
        Дисклеймер и прочее..
      </p>
      <p style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }} onClick={clickHandler}>
        Начать чтение
      </p>
    </PageWrapper>
  );
};
