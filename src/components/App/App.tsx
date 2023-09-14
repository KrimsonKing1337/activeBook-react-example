import { PropsWithChildren, useEffect } from 'react';
import { Provider } from 'react-redux';

import { history, store, StoreProvider } from 'activeBook-core/store';
import { Counter } from 'activeBook-core/components';
import { HistoryRouter } from 'redux-first-history/rr6';
import { hideAddressBarInMobileDevices } from 'activeBook-core/utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'activeBook-core/utils/control/keyboardControl';
import { AppWrapper } from 'activeBook-core/components/AppWrapper';
import effectsJson from 'book_pages/effects.json';

import { Routes } from './Routes';

export const App = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    addKeyboardControl();
    hideAddressBarInMobileDevices();
  }, []);

  return (
    <StoreProvider>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AppWrapper effectsJson={effectsJson}>
            <Counter />

            <Routes>
              {children}
            </Routes>
          </AppWrapper>
        </HistoryRouter>
      </Provider>
    </StoreProvider>
  );
};
