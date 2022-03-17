import React from 'react';
import { render } from 'react-dom';

import { App } from 'components/App';

/// #if env.sb
import { EffectExamples } from 'pages/EffectExamples';
/// #else
// eslint-disable-next-line
import { Page0 } from 'book_pages/Page0';
/// #endif

import { getIsMobile } from 'utils/mobile/getIsMobile';

import 'modern-css-reset/dist/reset.min.css';
import 'styles/reset.scss';
import 'styles/fonts.scss';

function initApp(component: React.ReactNode) {
  render(<App>{component}</App>, document.getElementById('root'));
}

export function init(component: React.ReactNode) {
  const isMobile = getIsMobile();

  if (isMobile) {
    document.addEventListener('deviceready', () => initApp(component), false);
  } else {
    initApp(component);
  }
}

// prevent refreshing whole page, see: https://github.com/gaearon/react-hot-loader/issues/422
if (module.hot) {
  module.hot.accept();
}

/// #if env.sb
init(<EffectExamples />);
/// #else
init(<Page0 />);
/// #endif
