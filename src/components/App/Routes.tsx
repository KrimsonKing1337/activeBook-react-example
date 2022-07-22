import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { initialState } from 'store/main/slice';

type RoutesProps = {
  children: React.ReactNode;
};

// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));

const getPageComponents = () => {
  const { pages } = initialState;

  const arr = [];

  for (let i = 0; i <= pages; i++) {
    const PageComponent = require(`book_pages/Page${i}`)[`Page${i}`];

    arr.push(PageComponent);
  }

  return arr;
};

export const Routes = ({ children }: RoutesProps) => {
  const pageComponents = getPageComponents();

  return (
    <Switch>
      <Route exact path="/">
        {children}
      </Route>

      {pageComponents.map((PageComponent, i) => {
        return (
          <Route exact path={`/page-${i}`} key={i}>
            <PageComponent />
          </Route>
        );
      })}
    </Switch>
  );
};
