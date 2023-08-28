import { PropsWithChildren, useEffect } from 'react';
import { Provider } from 'react-redux';

import { HistoryRouter } from 'redux-first-history/rr6';
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
      <HistoryRouter history={history}>
        <AppWrapper>
          <Routes>
            {children}
          </Routes>
        </AppWrapper>
      </HistoryRouter>
    </Provider>
  );
};
