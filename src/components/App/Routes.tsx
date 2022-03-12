import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Page1 } from 'pagesOfBook/Page1';
import { Page2 } from 'pagesOfBook/Page2';
import { Page3 } from 'pagesOfBook/Page3';
import { Page4 } from 'pagesOfBook/Page4';
import { Page5 } from 'pagesOfBook/Page5';
import { Page6 } from 'pagesOfBook/Page6';
import { Page7 } from 'pagesOfBook/Page7';
import { Page8 } from 'pagesOfBook/Page8';
import { Page9 } from 'pagesOfBook/Page9';
import { Page10 } from 'pagesOfBook/Page10';
import { Page11 } from 'pagesOfBook/Page11';
import { Page12 } from 'pagesOfBook/Page12';

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

      <Route exact path={'/page-5'}>
        <Page5 />
      </Route>

      <Route exact path={'/page-6'}>
        <Page6 />
      </Route>

      <Route exact path={'/page-7'}>
        <Page7 />
      </Route>

      <Route exact path={'/page-8'}>
        <Page8 />
      </Route>

      <Route exact path={'/page-9'}>
        <Page9 />
      </Route>

      <Route exact path={'/page-10'}>
        <Page10 />
      </Route>

      <Route exact path={'/page-11'}>
        <Page11 />
      </Route>

      <Route exact path={'/page-12'}>
        <Page12 />
      </Route>
    </Switch>
  );
};
