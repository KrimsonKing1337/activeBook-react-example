import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history, store } from 'store';
// todo: исправить в es-lint порядок, pageOfBooks воспринимается некорректно
import { Page1 } from 'pagesOfBook/Page1';
import { Page2 } from 'pagesOfBook/Page2';

import { AppWrapper } from 'components/AppWrapper';

import { addTouchSupportForCssHover } from 'utils/touch/addTouchSupportForCssHover';
import { hideAddressBarInMobileDevices } from 'utils/hideAddressBarInMobileDevices';

type AppProps = {
  children: React.ReactNode;
};

export const App = ({ children }: AppProps) => {
  useEffect(() => {
    addTouchSupportForCssHover();
    hideAddressBarInMobileDevices();
  }, []);

  // todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
  // todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
  // const Page1 = React.lazy(() => import('pagesOfBook/Page1'));

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppWrapper>
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
          </Switch>
        </AppWrapper>
      </ConnectedRouter>
    </Provider>
  );
};
