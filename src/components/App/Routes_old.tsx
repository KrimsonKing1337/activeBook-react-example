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
import { Page13 } from 'book_pages/Page13';
import { Page14 } from 'book_pages/Page14';
import { Page15 } from 'book_pages/Page15';
import { Page16 } from 'book_pages/Page16';
import { Page17 } from 'book_pages/Page17';
import { Page18 } from 'book_pages/Page18';
import { Page19 } from 'book_pages/Page19';
import { Page20 } from 'book_pages/Page20';
import { Page21 } from 'book_pages/Page21';
import { Page22 } from 'book_pages/Page22';
import { Page23 } from 'book_pages/Page23';
import { Page24 } from 'book_pages/Page24';
import { Page25 } from 'book_pages/Page25';
import { Page26 } from 'book_pages/Page26';
import { Page27 } from 'book_pages/Page27';
import { Page28 } from 'book_pages/Page28';
import { Page29 } from 'book_pages/Page29';
import { Page30 } from 'book_pages/Page30';

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

      <Route exact path={'/page-13'}>
        <Page13 />
      </Route>

      <Route exact path={'/page-14'}>
        <Page14 />
      </Route>

      <Route exact path={'/page-15'}>
        <Page15 />
      </Route>

      <Route exact path={'/page-16'}>
        <Page16 />
      </Route>

      <Route exact path={'/page-17'}>
        <Page17 />
      </Route>

      <Route exact path={'/page-18'}>
        <Page18 />
      </Route>

      <Route exact path={'/page-19'}>
        <Page19 />
      </Route>

      <Route exact path={'/page-20'}>
        <Page20 />
      </Route>

      <Route exact path={'/page-21'}>
        <Page21 />
      </Route>

      <Route exact path={'/page-22'}>
        <Page22 />
      </Route>

      <Route exact path={'/page-23'}>
        <Page23 />
      </Route>

      <Route exact path={'/page-24'}>
        <Page24 />
      </Route>

      <Route exact path={'/page-25'}>
        <Page25 />
      </Route>

      <Route exact path={'/page-26'}>
        <Page26 />
      </Route>

      <Route exact path={'/page-27'}>
        <Page27 />
      </Route>

      <Route exact path={'/page-28'}>
        <Page28 />
      </Route>

      <Route exact path={'/page-29'}>
        <Page29 />
      </Route>

      <Route exact path={'/page-30'}>
        <Page30 />
      </Route>
    </Switch>
  );
};
