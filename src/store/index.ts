import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouterProps, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { incrementReducer, watchIncrementActions } from './increment';
import { mainReducer, watchMainActions } from './main';
import { configReducer, watchConfigActions } from './config';
import { volumeReducer, watchVolumeActions } from './volume';
import { effectsReducer } from './effects/common';
import { audioEffectsReducer, watchAudioEffectsActions } from './effects/audio';
import { audioBgEffectsReducer, watchAudioBgEffectsActions } from './effects/audioBg';
import { musicEffectsReducer, watchMusicEffectsActions } from './effects/music';
import { sideShadowReducer, watchSideShadowActions } from './effects/sideShadow';
import { sideTextReducer, watchSideTextActions } from './effects/sideText';
import { bookmarksReducer, watchBookmarksActions } from './bookmarks';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const compose = composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)));

const makeRootReducer = (history: ConnectedRouterProps['history']) => {
  return combineReducers({
    router: connectRouter(history),
    increment: incrementReducer,
    main: mainReducer,
    config: configReducer,
    volume: volumeReducer,
    effects: effectsReducer,
    audioEffects: audioEffectsReducer,
    audioBgEffects: audioBgEffectsReducer,
    musicEffects: musicEffectsReducer,
    sideShadowEffect: sideShadowReducer,
    sideTextEffect: sideTextReducer,
    bookmarks: bookmarksReducer,
  });
};

const rootReducer = makeRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose);

sagaMiddleware.run(watchIncrementActions);
sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
sagaMiddleware.run(watchAudioEffectsActions);
sagaMiddleware.run(watchAudioBgEffectsActions);
sagaMiddleware.run(watchMusicEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
