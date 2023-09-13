import ReactDOM from 'react-dom/client';

import { App } from 'components/App';

/// #if env.demo
import { EffectExamples } from 'pages/EffectExamples';
/// #else
// eslint-disable-next-line
import { Page0 } from 'book_pages/Page0';
/// #endif

import { getIsMobile } from 'activeBook-core/utils/mobile/getIsMobile';

import 'modern-css-reset/dist/reset.min.css';
import 'styles/reset.scss';
import 'styles/fonts.scss';

function initApp(component: React.ReactNode) {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

  root.render(
    <App>
      {component}
    </App>,
  );
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

/// #if env.demo
init(<EffectExamples />);
/// #else
init(<Page0 />);
/// #endif
