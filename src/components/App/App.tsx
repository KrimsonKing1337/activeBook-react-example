import React, { PropsWithChildren, useEffect } from 'react';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import { history, store } from 'store';

import { AppWrapper } from 'components/AppWrapper';

import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'utils/control/keyboardControl';

import { Routes } from './Routes';

export const App = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    addKeyboardControl();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppWrapper>
          <Routes>
            {children}
          </Routes>
        </AppWrapper>
      </ConnectedRouter>
    </Provider>
  );
};
