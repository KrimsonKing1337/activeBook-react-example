import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Page1 } from 'pagesOfBook/Page1';
import { Page2 } from 'pagesOfBook/Page2';
import { Page3 } from 'pagesOfBook/Page3';
import { Page4 } from 'pagesOfBook/Page4';

type RoutesProps = {
  children: React.ReactNode;
};

// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));

export const Routes = ({ children }: RoutesProps) => {
  return (
    <Switch>
      <Route exact path={'/'}>
        {children}
      </Route>

      <Route exact path={'/page-1'}>
        <Suspense fallback={null}>
          <Page1 />
        </Suspense>
      </Route>

      <Route exact path={'/page-2'}>
        <Page2 />
      </Route>

      <Route exact path={'/page-3'}>
        <Page3 />
      </Route>

      <Route exact path={'/page-4'}>
        <Page4 />
      </Route>
    </Switch>
  );
};
