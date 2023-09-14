import ReactDOM from 'react-dom/client';

import effectsJson from 'book_pages/effects.json';
import { App } from 'activeBook-core/components/App';
import { Page0 } from 'book_pages/Page0';
import { getIsMobile } from 'activeBook-core/utils/mobile/getIsMobile';

import { EffectExamples } from 'pages/EffectExamples';

import 'activeBook-core/styles/styles.scss';

function initApp(component: React.ReactNode) {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

  root.render(
    <App effectsJson={effectsJson}>
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
