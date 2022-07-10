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
import { backgroundVideoEffectReducer } from './effects/background/video';
import { backgroundImgEffectReducer } from './effects/background/img';
import { soundEffectsReducer, watchSoundEffectsActions } from './effects/audio/sound';
import { soundBgEffectsReducer, watchSoundBgEffectsActions } from './effects/audio/soundBg';
import { musicEffectsReducer, watchMusicEffectsActions } from './effects/audio/music';
import { sideShadowReducer, watchSideShadowActions } from './effects/side/shadow';
import { sideTextReducer, watchSideTextActions } from './effects/side/text';
import { bookmarksReducer, watchBookmarksActions } from './bookmarks';
import { achievementsReducer, watchAchievementsActions } from './achievements';

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
    soundEffects: soundEffectsReducer,
    soundBgEffects: soundBgEffectsReducer,
    musicEffects: musicEffectsReducer,
    sideShadowEffect: sideShadowReducer,
    sideTextEffect: sideTextReducer,
    backgroundVideoEffect: backgroundVideoEffectReducer,
    backgroundImgEffect: backgroundImgEffectReducer,
    bookmarks: bookmarksReducer,
    achievements: achievementsReducer,
  });
};

const rootReducer = makeRootReducer(history);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose);

sagaMiddleware.run(watchIncrementActions);
sagaMiddleware.run(watchConfigActions);
sagaMiddleware.run(watchMainActions);
sagaMiddleware.run(watchSoundEffectsActions);
sagaMiddleware.run(watchSoundBgEffectsActions);
sagaMiddleware.run(watchMusicEffectsActions);
sagaMiddleware.run(watchBookmarksActions);
sagaMiddleware.run(watchSideShadowActions);
sagaMiddleware.run(watchSideTextActions);
sagaMiddleware.run(watchVolumeActions);
sagaMiddleware.run(watchAchievementsActions);
