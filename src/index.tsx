import ReactDOM from 'react-dom/client';

import { App } from 'activeBook-core/components';
import { getIsMobile } from 'activeBook-core/utils/mobile/getIsMobile';
import { EffectExamples } from 'demo/EffectExamples';

import { Page0 } from 'pages/Page0';

import rangeEffectsJson from './rangeEffects.json';

import 'activeBook-core/styles/styles.scss';

function initApp(component: React.ReactNode) {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

  root.render(
    <App rangeEffectsJson={rangeEffectsJson}>
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
