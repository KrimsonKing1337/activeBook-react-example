import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Page1 } from 'book_pages/Page1';
import { Page2 } from 'book_pages/Page2';
import { Page3 } from 'book_pages/Page3';
import { Page4 } from 'book_pages/Page4';
import { Page5 } from 'book_pages/Page5';
import { Page6 } from 'book_pages/Page6';
import { Page7 } from 'book_pages/Page7';
import { Page8 } from 'book_pages/Page8';
import { Page9 } from 'book_pages/Page9';
import { Page10 } from 'book_pages/Page10';
import { Page11 } from 'book_pages/Page11';
import { Page12 } from 'book_pages/Page12';

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
