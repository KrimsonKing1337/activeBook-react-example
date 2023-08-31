import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { mainReducer, watchMainActions } from './main';
import { configReducer, watchConfigActions } from './config';
import { volumeReducer, watchVolumeActions } from './volume';
import { effectsReducer } from './effects/common';
import { backgroundVideoEffectReducer } from './effects/background/video';
import { backgroundImgEffectReducer } from './effects/background/img';
import { soundEffectsReducer, watchSoundEffectsActions } from './effects/audio/sound';
import { soundBgEffectsReducer, watchSoundBgEffectsActions } from './effects/audio/soundBg';
import { musicEffectsReducer, watchMusicEffectsActions } from './effects/audio/music';
import { sideShadowReducer, watchSideShadowActions } from './effects/side/shadow';
import { sideTextReducer, watchSideTextActions } from './effects/side/text';
import { bookmarksReducer, watchBookmarksActions } from './bookmarks';
import { achievementsReducer } from './achievements';

const sagaMiddleware = createSagaMiddleware();

const reduxHistoryContextMiddleware = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const { createReduxHistory, routerMiddleware, routerReducer } = reduxHistoryContextMiddleware;

const reducer = {
  router: routerReducer,
  main: mainReducer,
  config: configReducer,
  volume: volumeReducer,
  effects: effectsReducer,
  soundEffects: soundEffectsReducer,
  soundBgEffects: soundBgEffectsReducer,
  musicEffects: musicEffectsReducer,
  sideShadowEffect: sideShadowReducer,
  sideTextEffect: sideTextReducer,
  backgroundVideoEffect: backgroundVideoEffectReducer,
  backgroundImgEffect: backgroundImgEffectReducer,
  bookmarks: bookmarksReducer,
  achievements: achievementsReducer,
};

const middleware = [
  sagaMiddleware,
  routerMiddleware,
];

export const store = configureStore({
  reducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>

export const history = createReduxHistory(store);

sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
sagaMiddleware.run(watchSoundEffectsActions);
sagaMiddleware.run(watchSoundBgEffectsActions);
sagaMiddleware.run(watchMusicEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
